import React, { useRef, useState } from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocalSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
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
            <div 
            
            className="h-screen w-screen">
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

            <div ref={vehiclePanelRef} className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10">
                <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen}/>
            </div>
        </div>
    )
}

export default Home;
