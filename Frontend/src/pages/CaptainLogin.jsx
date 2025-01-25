import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../../context/CaptainContext";

const CaptainLogin = ()=>{

        const [email,setEmail]=useState('')
        const [password,setPassword] = useState('')
        const {captain,setCaptain} = React.useContext(CaptainDataContext);
        const navigate = useNavigate();        
        
        const submitHandler=async(e)=>{
            e.preventDefault();
            const captain = {
                email:email,
                password:password
            }
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captain);
            if(response.status == 200){
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token',data.token);
                navigate('/captain-home');

            }
            
            
            setEmail('');
            setPassword('')
    
        };
        
    return(
        <div className="p-7 h-screen lex flex-col justify-between">
           <div>
             <img className="w-20 mb-3" src="data:image/png;base64,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"/>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <h3 className="text-lg font-medium mb2 ">What's your email</h3>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="email"
                placeholder="email@example.com">
                </input>


                <h3 className="text-lg font-medium mb2 ">Enter Password</h3>


                <input 
                 value={password}
                 onChange={(e)=>{
                     setPassword(e.target.value)
                 }}
                required 
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type='password' 
                placeholder="password"/>
                <button
                className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
                >Login</button>
            
            <div className="text-center">
               <p>Join a fleet?</p>
               <Link to='/captain-signup' className="text-blue-600">Register as a Captain </Link>
            </div>
            </form>
           </div>
           <div>
            <Link 
            to='/login'
            className="bg-[#d5622d] flex items-center justify-center mb-5 text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            >Sign in as User</Link>
           </div>
        </div>
    )
}
export default CaptainLogin;