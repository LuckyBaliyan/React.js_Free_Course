import React from 'react';
import { useContext,useState } from 'react';
import UserContext from '../context/userContext';


function Profile(){
    const {user} = useContext(UserContext);
    const {user2} = useContext(UserContext);

    if(!user) return <p>Please Login !</p>
    return(
        <div>Welcom User1:{user.username}
         <br />
            Welcome User2:{user2.username}
        </div>
    )
}

export default Profile;