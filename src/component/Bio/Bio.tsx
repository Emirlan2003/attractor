import React from 'react';

const Bio = ({ user, toggleChange }: any) => {
    return (
        <div className='changeBlock'>
             <h1>Name: {user.name}</h1>
             <div>Login: {user.login}</div>
             <div>Email: {user.blog}</div>
             <div>Company: {user.company}</div>
             <div>Location: {user.location}</div>
             <div>Bio:</div>
             <div>{user.bio}</div>
             <button onClick={toggleChange} className='changeBtn'>Изменить данные</button>
        </div>
    );
};

export default Bio;