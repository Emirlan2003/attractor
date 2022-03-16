import React, { useState } from 'react';

const ReposForm = ({ repos }: any) => {


    return (
            repos.map((item: any) => (
                <div className='repo' key={item.id}>
                    <div>
                        <span>name:</span><a href={item.owner.html_url}>{item.name}</a><br/>
                        <span>author:</span><a href={item.html_url}>{item.owner.login}</a>
                    </div>
                </div>
            ))
    );
};

export default ReposForm;