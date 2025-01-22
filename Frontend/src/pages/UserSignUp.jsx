import React, { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from "../../context/UserContext";
const UserSignup = ()=>{
    //2 way binding
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [firstname,setFirstName]=useState('');
    const [lastname,setLastName]=useState('');
    const [userData,setUserData]=useState({})
    


    const navigate = useNavigate();

    //we have passed into usercontext
    const {user,setUser} = useContext(UserDataContext);
    
    const submitHandler=async(e)=>{
        e.preventDefault();
        const newUser ={
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email:email,
            password:password
        }


        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
            if(response.status === 201) {
                setUser(response.data.user);
                localStorage.setItem('token',response.data.token)
                navigate('/home');
                setEmail('');
                setFirstName('');
                setLastName('');
                setPassword('');
            }
          } catch (error) {
            console.error('Error during signup:', error.response ? error.response.data : error.message);

          }
          
    

       
    };
    // useEffect(() => {
    //     console.log(userData);
    // }, [userData]);
    return(
        <div className="p-7 h-screen lex flex-col justify-between">
        <div>
          <img className="w-16 mb-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8BAgIAAACnp6cdHh5VVVXh4eGenp5aW1uWlpYuLi54eHjT09P39/dRUVHd3d1gYWHv7++2trZISEg+Pj69vb1mZmahoaGRkZFycnLIyMjs7Ox+fn7X19eGhobo6OjDw8MXFxc4ODiKiooPEBAmJiYyMzOvr69KS0sZGhonJydA9JCLAAAHNklEQVR4nO2c6XryOAyFwYFQWsJedsJSKP24/wuckBJb8g5DZp555rz/mkaOjhfZlt02GgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf0pUsVlEGF2VxqZ71FrKQz9o8fRah6EQZtJXBT/Vsrp4ta/P0WZqSSIVvQhq0q2eJevZRm6fPAoUGUFibp88ChQZQWJunzwKFBlBYm6fPAoUGUFibp88ChQZQWJunzwKFBlDIXu4lef94bV2PP5vOKnvUt8Fnd9mefL8fh/m897B1ozFaF9SoMLuQlE7JdJFGe5eNh5r1ZL5zvLtrDys290eDbvXx2hTuPm7FNymlm/uoj6w3Vuu2PR2YkmooH+zflXlNCkdL3UHp5nc43+ixPto0purzt/RfNqPm9ShM7B7e3ZwG+mrHaz0cBRTuuHUdCrO+28NfL7ue8tdHr3WhfuxVqAmsQ2HPr6/0cuqMjJ8R1hvNhinU7V+uMN8HXby9dnLExSTKeuZU2F7q9i9XeNVd/I1xhpPCOhi7dmvdXPQdCpvml16tsMm+wOYz3fW1WfZFmOanP03TnB+PpL52f7lC7t9ynJYjbt1bTDUvxckYi2wEF6+3vla/gXO0yk+aNXXWolBVbH0Kjdl998U1qqOrOyMucMKnvv2U/3rrUVh8aHbZpumgoC6FQlx7hmm24RK1SWPCFOwN8zGTeHArFCIn/aMeha4pb3BiKli06dBf9W3TSTalryxcCkWLlVuLQiFc58ncyQn5De2j+nQgGdKoKRc3XKH45rVTh0IhBm77HyqRrFHJRCaGTus+eUtuY5hC2n3rUuhuwZJ34uS3fEqaUFzdxpnq5kJUbZW6QlBtChNvAWvaHWUj5sRz38qczCjSYabQSDK8XqF4C5QwJgqn1UPi+JfXWvVm2R/ZmsZYDr5cIYkALn7M9hpbOp8d0gWq4U4V9g2D1yv0N8GNAfGoa5S68Bs3ZkY3pQrNEfJqhaEmKFERsZowZMNY16uMlTLumwr1OFODwpgrQ3u9T64MyR6aqjZ0hbb6fbnCqLtjZCyV76v1jJgHjUms2ekKT+brL1ZYVWuAmaaI/NwK8ke9vNcVWqbSVyvUNwx2iEGZkpjSgRxEvXvRFb7Xr1DPodgh466cPQ8RuQsL97j7zyqMK4T4dCx+zGKyMzaFm39B4cVnK1krg/PfUfgRozB2tVTx41doJDOtZHzpVatCNQIiL79e/2tt+G2sEAIIv0JfOluh1m2/a28aHx8hRiEZVq0Y33bEF5vCuI5AFjXldp50jHN4QpScYiLNhngc3BQ0+NbHptDyCQtdZZDfflZJKF96wIVf4dy2HfXw4VfYjFl4M0XlwFX1HNg+W/ErXBHn3OkRhQgpjKmmkb7HSx6NBgy/QvqxiPonFeJQGNrh8/fv69jBQ07o+BWyxFB4Xd8OKjTTCCZk7XzvN6Sew07oBBTmxDvL3oOzZQkZ+x4/HE1ptLqvENTwFs14aXcCCnvUu9BsNo1QGI6GJ72T8nAQN6USAgpJlwl2sS4V6My1HQMO0QlKNnhLxDrRMH4dUjinDfBte6NCO7925ktzr4N7Gttke9NZK1BFrXdNY0ghWxT6ZoxUP6Z0ZvV9u5QtnW9I4I05tiiZFKs1vvoNKWwsWB9zlj4wjnHd5xZuiVtWn2TIsq7kuR13W2YK1xmwa0nFT/Um9gnpYqz/fWdPro7KrlrwhMA5pitVZ1fiQConrPDCh5FtjzcaWm4b+E5IJ9bDB3ZEqk3u/Iy7ZY3IK5JXVcu7sEJ24nUzPu41fbntmpL3lFuIjdEXLoIL1E6Jc8HtjY3AesZ2WbKfRCgc6TFEnL7kZcndpe+4ZhY4xxc5bccsOWuh2Ejf89m2GGysCnozPppUD4hQaN5jKu95TPrt/tR6HSZCYVnGdTn/3KaDVZJPjAsj5lDLDlpfEofZfLxN0+24M9PcoGdwMQotcURutvWnfoWWGzH2cmx7iNHJUtFWe9bFoxTyiw5uxJGkp617/Mhy7McTo8jEKR/DcQojrsw1y6zKxq+wM2qGyxHuWXca5caBRepIheaMbnFsyHYB9kxUNgkV5P3D+E2EG20epmMVNjLLnMdLvi2WggpviyRfOUK8e6/QrizX75i5keiIVlgU3vLdzm2XC94IhY3U3YyFg8Et7sIVvUv7t4f3FoykaS29eDi9HwzGKCzqSr+oVxUjFhFZitGXfYoqHv6Yl8keU1hEnLYWm8sfl/L0eKnit4yH5L9GyGm8Z85gQpznkVmYLDlazMXGupYjd/X160KO0sdLNhEdNzR/lvYk8nNr9Yx0oezz40DL6c/j/9zi9qFkeWbmzn9NkqnPm8f4TpXbz87tf5Ukq3gbRzmXoqBOsnpInWS7GicF+21MthoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgzl/ghV46RSJYrAAAAABJRU5ErkJggg=="/>
         <form onSubmit={(e)=>{
             submitHandler(e)
         }}>
        
        <h3 className="text-lg font-medium mb2 ">What's your name?</h3>
        <div className="flex gap-2">
            <input 
             required 
             className="bg-[#eeeeee] w-1/2 mb-6 rounded px-4 py-2 border  text-lg placeholder:text-base"
             type="text"
             value={firstname}
             onChange={(e)=>{
                setFirstName(e.target.value)
             }}
             placeholder="First Name">
             </input>
             <input 
             required 
             className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
             type="text"
             value={lastname}
             onChange={(e)=>{
                setLastName(e.target.value)
             }}
             placeholder="Last Name">
             </input>
        
        </div>
             <h3 className="text-lg font-medium mb2 ">What's your email?</h3>
             <input 
             required 
             className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
             type="email"
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value)
             }}
             placeholder="email@example.com">
             </input>


             <h3 className="text-lg font-medium mb2 ">Enter Password</h3>


             <input 
             required type="password"
             className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
             placeholder="password"
             value={password}
             onChange={(e)=>{
                setPassword(e.target.value)
             }}
             />
             <button
             className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
             >Create Account </button>
         
         <div className="text-center">
            <p>Already have an account</p>
            <Link to='/login' className="text-blue-600">Login Here</Link>
         </div>
         </form>
        </div>
        <div>
        <p className="text-[10px] leading-tight mt-5 pl-4 "> 
            By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiltates to the email provided
        </p>
        </div>
     </div>
    )
}
export default UserSignup ;