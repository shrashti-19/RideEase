import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectedWrapper = ({children})=>{
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const {captain , setCaptain} = useContext(CaptainDataContext);
    const [isLoading,setIsLoading] = useState(true);
    console.log(token);
    
    useEffect(()=>{

    
    if(!token){
        navigate('/captain-login');
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 200) {
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    })
        .catch(err => {

            localStorage.removeItem('token')
            navigate('/captain-login')
        })
    },[token,navigate]);

   

    //take data from profile page same render the children
    //if any error login render
    if(isLoading){
        return(
            <div>Loading..</div>
        )
    }


    return(
        <div>
            {children}
        </div>
    )
}

export default CaptainProtectedWrapper;