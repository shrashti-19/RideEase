import React, { useContext } from "react";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import { Routes ,Route} from "react-router-dom";
import UserSignup from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignUp";
import { UserDataContext } from "../context/UserContext";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
const App = ()=>{
  const ans =useContext(UserDataContext)
  console.log(ans);
  
  return(
    <div>
      <Routes>
        <Route path = '/' element={<Start/>}/>
        <Route path = '/login' element={<UserLogin/>}/>
        <Route path ='/signup' element={<UserSignup/>}/>    
        <Route path = '/captain-login' element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignup/>}/>  
        <Route path ="/home" element={
          <UserProtectedWrapper>
          <Home/>
          </UserProtectedWrapper>
          }/>

      <Route path="/users/logout" element={<UserProtectedWrapper>
           <UserLogout/>
      </UserProtectedWrapper>}
      />
      </Routes>
    </div>

  )
}
export default App