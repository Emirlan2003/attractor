import React from 'react';

const BackBtn = ({ onClick }: any) => {
    return (
        <div>
             <button className='backBtn'
                    onClick={onClick}>
                    {'<'}
            </button>
        </div>
    );
};

export default BackBtn;