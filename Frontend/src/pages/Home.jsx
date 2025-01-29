import React, { useRef, useState } from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocalSearchPanel from "../components/LocationSearchPanel";
const Home = () => {
    const[pickup , setPickup] =useState('');
    const [destination , setDestination] = useState('');
    const [panelOpen , setPanelOpen] = useState(false);
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null);
    const [vehiclePanelOpen,setVehiclePanelOpen] = useState(false);
    const vehiclePanelRef = useRef(null);
    const submitHandler = (e)=>{
        e.preventDefault();
    }
    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:'70%',
                padding : 24,
                opacity:1
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })

        }else{
            gsap.to(panelRef.current,{
                height:'0%',
                padding:24,
                opacity : 0
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
        }
    },[panelOpen])

    useGSAP(function(){
        if(vehiclePanelOpen){
            gsap.to(vehiclePanelRef.current, {
                y: 0, // GSAP uses `y` for translateY
                duration: 0.5,
                ease: "power2.out"
            });
        } else {
            gsap.to(vehiclePanelRef.current, {
                y: "100%",
                duration: 0.5,
                ease: "power2.in"
            });
        }
    }, [vehiclePanelOpen]);
    

 


    return (
        <div className="h-screen relative overflow-hidden">
            <img 
                className="w-16 absolute left-5 top-5" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yF-nFzNZSoDYqYDahDHQf5p2ttS3viGK3g&s"/>
            <div className="h-screen w-screen">
                {/* Image for temporary use */}
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
            </div>
            <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
                <div className="h-[30%] bg-white p-5 relative">
                    <h5 ref={panelCloseRef}onClick={()=>{
                        setPanelOpen(false)

                    }}className="absolute opacity-0 right-2 top-6 text-2xl">
                    <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
                        <input 
                        onClick={()=>{
                            setPanelOpen(true);

                        }}
                            value={pickup}
                            onChange={(e)=>{
                                setPickup(e.target.value)
                            }}
                            className="bg-[#eee] px-4 py-2 text-base w-full rounded-lg mt-5"
                            type="text"
                            placeholder="Add a pickup location"
                        />
                        <input 
                        onClick={()=>{
                            setPanelOpen(true);
                        }}
                            value={destination}
                            onChange={(e)=>{
                                setDestination(e.target.value);
                            }}

                            className="bg-[#eee] px-4 py-2 text-base rounded-lg mt-3 w-full"
                            type="text"
                            placeholder="Enter your destination"
                        />
                    </form>
                </div>
                <div ref={panelRef}className="bg-white h-0 ">
                    <LocalSearchPanel setPanelOpen={setPanelOpen}   setVehiclePanel={setVehiclePanelOpen}/>
                </div>
            </div>

            <div ref={vehiclePanelRef} className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-8">
                <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
                {/* Car */}
                <div className="flex border-2 focus:ring-2 focus:ring-black hover:border-black mb-2 rounded-xl w-full flex items-center justify-between p-3 cursor-pointer transition-all">
                    <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"/>
                    <div className=" ml-10  w-1/2">
                        <h4 className="font-medium text-base">Uber Go <span><i class="ri-user-3-fill"></i>4</span></h4>
                        <h5>2 mins away </h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
                        
                    </div>
                    <h2 className="text-lg font-semibold">₹193.20</h2>
                </div>

                {/* MotorCycle */}
                <div className="flex border-2 focus:ring-2 focus:ring-black hover:border-black mb-2 rounded-xl w-full flex items-center justify-between p-3 cursor-pointer transition-all">
                    <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"/>
                    <div className=" ml-1/2 w-1/2">
                        <h4 className="font-medium text-base">Moto <span><i class="ri-user-3-fill"></i>1</span></h4>
                        <h5>3 mins away </h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, motorcyle rides</p>
                        
                    </div>
                    <h2 className="text-lg font-semibold">₹65</h2>
                </div>

                {/* Auto */}
                <div className="flex border-2 focus:ring-2 focus:ring-black hover:border-black mb-2 rounded-xl w-full flex items-center justify-between p-3 cursor-pointer transition-all">
                    <img className="h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s"/>
                    <div className=" ml-2 w-1/2">
                        <h4 className="font-medium text-base">Uber Auto <span><i class="ri-user-3-fill"></i>3</span></h4>
                        <h5>3 mins away </h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, auto rides</p>
                        
                    </div>
                    <h2 className="text-lg font-semibold">₹18.68</h2>
                </div>

            </div>
        </div>
    )
}

export default Home;
