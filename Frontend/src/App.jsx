import React, { useContext } from "react";
import Home from "../src/pages/Home"
import UserLogin from "./pages/UserLogin";
import { Routes ,Route} from "react-router-dom";
import UserSignup from "./pages/userSignUp";
import CaptainLogin from "./pages/captainLogin";
import CaptainSignup from "./pages/captainSignUp";
import { UserDataContext } from "../context/UserContext";


const App = ()=>{
  const ans =useContext(UserDataContext)
  console.log(ans);
  
  return(
    <div>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/login' element={<UserLogin/>}/>
        <Route path ='/signup' element={<UserSignup/>}/>    
        <Route path = '/captain-login' element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignup/>}/>  
      </Routes>
    </div>

  )
}
export default App