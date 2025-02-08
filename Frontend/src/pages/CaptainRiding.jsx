import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRidng=()=>{

    const [finishRidePanel , setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);



    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])

    return(
        <div>
            <div>
                <div>
                    <div className="h-screen relative">
                        <div className="fixed p-4 top-0  w-screen flex items-center justify-between">
                            <img className="w-16 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yF-nFzNZSoDYqYDahDHQf5p2ttS3viGK3g&s" alt=""/>
                            <Link  to ='/captain-home' className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"> 
                               <i class="ri-logout-box-r-line"></i>
                            </Link>
                        
                        </div>
                
                    <div className="h-4/5"> 
                      <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Background"/>
                    </div>
                    <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400"
                    onClick={()=>{
                        setFinishRidePanel(true);
                    }}
                    >
                     
                    <h5
                    className="p-1 text-center absolute w-[95%] top-0"
                    onClick={() => {
                    
                    }}
                    > <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
                          <h4 className="text-xl font-semibold">4 KM Away</h4>
                          <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
                        

                    </div>
                    <div ref={finishRidePanelRef} className="fixed w-full z-10 bg-white translate-y-full bottom-0 px-3 py-12">
                       <FinishRide setFinishRidePanel = {setFinishRidePanel} />
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
    )
}

export default CaptainRidng;