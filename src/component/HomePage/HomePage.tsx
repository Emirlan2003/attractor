import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUser } from '../../store/action-creators/action-creators';
import Bio from '../Bio/Bio';
import ChangeForm from '../ChangeForm/ChangeForm';
import Repos from '../Repos/Repos';
import './HomePage.css'
const bodyImg = require('../../assets/body.png')




const HomePage = () => {
    const [ state, setState ] = useState(false)
    const [ change, setChange ] = useState(false)
    const { user } = useTypedSelector(state => state.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ data, setData ] = useState<any>({
        name: "",
        company: "",
        location: "",
        bio: ""
    })


    useEffect(() => {
        dispatch(getUser())
    }, [])



    const toggleRepo = () => {
        if(!state){
            setState(true)
        }else{
            setState(false)
        }
    }


    const otherUsers = () => {
         navigate('/other')
    }


    const toggleChange = () => {
        if(!change){
            setChange(true)
        }else{
            setChange(false)
        }
    }


    const handleChange = async() => {
        const accessToken = JSON.parse(localStorage.getItem('token') || '{}')
        await axios.patch('https://api.github.com/user', {
            headers: {
                accept: 'application/vnd.github.v3+json',
                Authorization: `token ${accessToken}`
            },
            body: {
                "name": data.name,
                "company": data.company,
                "location": data.location,
                "bio": data.bio
            }
        });
        setChange(false)
    }



    const handleValues = (e: any) => {
        let newObj = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(newObj)
    }


    return (
        <>
           <div className='fonBlock'>
            <div className='main'>
                <div key={user.id}>
                    <img 
                        src={user.avatar_url} 
                        alt="" 
                        className='avatar'
                    />
                    {
                        change ?
                            <ChangeForm 
                                        data={data} 
                                        user={user} 
                                        handleValues={handleValues} 
                                        handleChange={handleChange} 
                                        toggleChange={toggleChange}
                            />
                        :
                            <Bio 
                                user={user} 
                                toggleChange={toggleChange}
                            />
                    }
                    <button className='btnOpen'>
                           <a href={user.html_url}>open github</a>
                    </button>
                </div>
             </div>
             <div className='headerText'>
                 <span onClick={toggleRepo} className='other'>
                   Репозитории
                 </span>
                 <span onClick={otherUsers} className='other'>
                   Другие пользователи
                 </span>
                 <div>
                     {
                         state ?
                              <Repos />
                               :
                               <img 
                                    src={bodyImg} 
                                    alt="error" 
                                    className='bodyImg'
                                />
                     }
                 </div>
             </div>
           </div>
         </>
        
    );
};

export default HomePage;