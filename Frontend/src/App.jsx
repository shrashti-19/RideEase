import React from "react";
import Home from "../src/pages/Home"
import UserLogin from "./pages/userLogin";
import { Routes ,Route} from "react-router-dom";
import UserSignup from "./pages/userSignUp";
import CaptainLogin from "./pages/captainLogin";
import CaptainSignup from "./pages/captainSignUp";


const App = ()=>{
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