import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUsers } from '../../store/action-creators/action-creators';
import BackBtn from '../BackBtn/BackBtn';
import './OtherUser.css'

const OtherUser = () => {
    const { users, length } = useTypedSelector(state => state.data)
    const [ value, setValue ] = useState<any>('')
    const [ page, setPage ] = useState<number>(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getUsers(value || null, page))
    }, [value || page])

    
    const funcValue = (e: any) => {
        setValue(e.target.value)
    }

    const signDetails = (id: any) => {
         navigate(`/other/details/${id}`)
    }

    const backBtn = () => {
        navigate('/home')
    }


    return (
        <>
        <div>
        </div>
        <div className='otherMain'>
            <div>
                <div className='headerOther'>
                    <BackBtn onClick={backBtn}/>
                    <input type="text" onChange={funcValue}/>
                </div>
                {
                    value ? 
                        <div>{`Всего найдено пользователей ${length.total_count}`}</div>
                          :
                        null
                }
            </div>
            <div className='otherUserBlock'>
               {
                   users ?
                        users.map((item: any) => (
                            <div 
                                className='otherUser' 
                                onClick={() => signDetails(item.login)}>
                                <img src={item.avatar_url} alt="" />
                                <div>{item.login}</div>
                            </div>
                        ))
                         : 
                         <h1>Loading</h1>
               }
            </div>
        </div>
        </>
    );
};

export default OtherUser;