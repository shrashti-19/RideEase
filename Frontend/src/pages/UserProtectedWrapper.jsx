import React, { useEffect } from "react";
import { UserDataContext } from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({children})=>{
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    console.log(token);
    
    useEffect(()=>{
    if(!token){
        navigate('/login');
    }
},[token,navigate]);
    return(
        <div>
            {children}
        </div>
    )
}

export default UserProtectedWrapper;