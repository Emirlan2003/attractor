import React from 'react';
import { clientId, img, url } from '../../url/url';
import './Auth.css'

const Auth = () => {
    return (
        <div className='body'>
             <div className='mainBlock'>
                <div className="content unauthorized">
                    <div className="top">
                         <img className="img-github" src={`${img}`} />
                         <h1>Happy to see you<br />newcomer 👋</h1>
                    </div>
                    <div className="content-bottom">
                         <a className="btn" 
                            href={`${url}login/oauth/authorize?client_id=${clientId}&scope=repo&state=190405`}>
                            SIGN IN WITH GITHUB
                         </a>
                         <p className="sign-in-text">in order to get started</p>
                     </div>
                </div>
             </div>
        </div>
    );
};

export default Auth;