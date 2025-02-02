import React, { useContext } from "react";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserLogin from "./pages/userLogin";
import { Routes ,Route} from "react-router-dom";
import UserSignup from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignUp";
import { UserDataContext } from "../context/UserContext";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainLogout from "./pages/CaptainLogout";
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
        <Route path ="/home" 
        element={
          <UserProtectedWrapper>
          <Home/>
          </UserProtectedWrapper>
          }/>

      <Route path="/users/logout" element={<UserProtectedWrapper>
           <UserLogout/>
      </UserProtectedWrapper>}
      />
      <Route path ="/captain/logout" element={
        <CaptainProtectedWrapper>
          <CaptainLogout/>
        </CaptainProtectedWrapper>
      }
      />
      <Route path='/captain-home' element={
         <CaptainProtectedWrapper>
          <CaptainHome/>
         </CaptainProtectedWrapper>
      }/>
      </Routes>
    </div>

  )
}
export default App;