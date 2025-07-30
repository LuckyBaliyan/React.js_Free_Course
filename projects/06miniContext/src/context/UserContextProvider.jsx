import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [user2,setUser2] = useState(null);

    return(
        <UserContext.Provider value={{user,setUser,user2,setUser2}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;