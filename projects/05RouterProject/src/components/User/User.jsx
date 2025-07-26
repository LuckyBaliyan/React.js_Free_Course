import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const {userName} = useParams();
    return(
        <div className='flex items-center justify-center bg-blue-600 px-2 py-5'>
        <h1 className='text-3xl text-white'>Welcome {userName}</h1>
        </div>
    )
}

export default User;