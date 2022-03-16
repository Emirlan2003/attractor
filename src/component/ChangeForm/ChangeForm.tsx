import React from 'react';

const ChangeForm = ({ data, user, handleValues, handleChange, toggleChange }: any) => {
    return (
        <div>
            <div>name:</div>
            <input 
                  type="text" 
                  value={data.name} 
                  onChange={handleValues} 
                  name='name'
                  />
            <div>{user.login}</div>
            <div>{user.blog}</div>
            <div>company:</div>
            <input 
                  type="text" 
                  value={data.company} 
                  onChange={handleValues} 
                  name='company'
                  /><br/>
            <div>location:</div>
            <input 
                  type="text" 
                  value={data.location} 
                  onChange={handleValues} 
                  name='location'
                  /><br/>
            <div>bio:</div>
            <input 
                  type="text" 
                  value={data.bio} 
                  onChange={handleValues} 
                  name='bio'
                  />
            <button onClick={handleChange}>save</button>
            <button onClick={toggleChange}>cancel</button>
        </div>
    );
};

export default ChangeForm;