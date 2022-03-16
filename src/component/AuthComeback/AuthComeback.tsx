import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { clientId, clientSecret, img, proxy, token, url } from '../../url/url';

const AuthComeback = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const code = location.search.split('').splice(6, 20).join('')

    const signInHome = () => {
        navigate('/home')
    }

    
    async function getToken(){
        const token = await axios({
            method: 'post',
            url: `${proxy}${url}login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
            headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
            "Access-Control-Allow-Headers": "Content-type",
            "Access-Control-Max-Age": "86400"
            }
        });
        const data = token.data.access_token
        localStorage.setItem('token', JSON.stringify(data))        
    }

    useEffect(() => {
        getToken()
    }, [])
    

    localStorage.setItem('token', JSON.stringify(`${token}`))            


    return (
        <div className='body'>
             <div className='mainBlock'>
                <div className="content authorized">
                    <div className="top">
                          <img className="img-github" src={`${img}`} />
                          <h1>
                               <span className="party-popper">🎉
                               </span><br />Awesome!<br />You're authorized 🔒
                          </h1>
                          <div className="btn" onClick={signInHome}>SIGN IN</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthComeback;