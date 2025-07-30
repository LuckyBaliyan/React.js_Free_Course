import React, { useContext, useEffect } from 'react';
import UserContext from '../context/userContext';

const Showcard = ({baseValue})=>{
    const {user,user2} = useContext(UserContext);
   // const {user2} = useContext(UserContext);

    //cehk this code not rendering the upperhalf on nulling the input after filling it
    if(!user  ||!user.username){return <p>{baseValue}</p>}
    else{
    return(
        <div className='card'>
            <div className="name">{user.username},{user2.username}</div>
            <div className="about">{user.password}</div>
        </div>
    )
   }
}

export default Showcard;