import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getRepos } from '../../store/action-creators/action-creators';
import ReposForm from '../ReposForm/ReposForm';
import './Repos.css'

const Repos = () => {
    const { repos } = useTypedSelector(state => state.data)
    const [ state, setState ] = useState<boolean>(false)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getRepos())
    }, [])
    
    const publicArr = repos.filter((item) => item.private === false)
    const privateArr = repos.filter((item) => item.private === true)


    const handlePrivate = () => {
        setState(true)
    }

    const handlePublic = () => {
        setState(false)
    }



    return (
        <div>
            <div className='reposBlock'>
                <span 
                    onClick={handlePublic}
                    className={state ? 'private' : 'public'}
                    >
                        public
                </span>
                <span 
                    onClick={handlePrivate}
                    className={state ? 'public' : 'private'}
                    >
                        private
                </span>
            </div>
                <div className='mainRepo'>
                    {
                        state ?
                                <ReposForm repos={privateArr}/>
                              :
                                <ReposForm repos={publicArr}/>
                    }
                </div>
        </div>
    );
};

export default Repos;