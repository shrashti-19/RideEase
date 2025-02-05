import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";

const CaptainHome=()=>{
        return(
            <div>
                <div>
                    <div className="h-screen">
                        <div className="fixed p-4 top-0  w-screen flex items-center justify-between">
                            <img className="w-16 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yF-nFzNZSoDYqYDahDHQf5p2ttS3viGK3g&s" alt=""/>
                            <Link  to ='/captain-login' className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"> 
                            <i class="ri-logout-box-r-line"></i>
                            </Link>
                        
                        </div>
                
                    <div className="h-3/5"> 
                    <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Background"/>
                    </div>
                    <div className="h-2/5 p-6">
                       <CaptainDetails/>
                    </div>


                    </div>
                    <div className="fixed w-full z-10 bg-white bottom-0 px-3 py-12">
                      <RidePopUp/>
                    </div>

                </div>
            </div>
                    
        )
    }
    


export default CaptainHome;