import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getDetails, getOtherRepos } from '../../store/action-creators/action-creators';
import BackBtn from '../BackBtn/BackBtn';
import ReposForm from '../ReposForm/ReposForm';
import './OtherDetails.css'

const OtherDetails = () => {
    const { details, otherRepo } = useTypedSelector(state => state.data)
    const match = useMatch('/other/details/:id')
    const dispatch = useDispatch()
    const navigate = useNavigate()



    useEffect(() => {
        dispatch(getDetails(match?.params.id))
        dispatch(getOtherRepos(match?.params.id))
    }, [])
    
    const backBtn = () => {
        navigate('/other')
    }
   

    return (
        <div>
            <div>
                <BackBtn onClick={backBtn}/>
            </div>
            <div className='detailsBlock'>
                <div className='detailsChildBlock'>
                    <img src={details.avatar_url} alt="" />
                    <h2>user: {details.login}</h2>
                    <button>
                        <a href={details.html_url}>Открыть в GITHUB</a>
                    </button>
                </div>
                <div>
                    <div>Репозитории</div>
                    <div className='detailsRepos'>
                        {
                            otherRepo ?
                                  <ReposForm repos={otherRepo}/>
                                  :
                                  null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherDetails;