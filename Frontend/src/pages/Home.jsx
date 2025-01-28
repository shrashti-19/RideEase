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
                    <i class="ri-arrow-down-wide-line"></i>
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
                    <LocalSearchPanel/>
                </div>
            </div>

            <div className="fixed w-full z-10 bg-white bottom-0 px-3 py-6">
                <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
                <div className="flex border-2 border-black mb-2 rounded-xl w-full  flex items-center justify-between p-3">
                    <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"/>
                    <div className=" w-1/2">
                        <h4 className="font-medium text-base">Uber Go <span><i class="ri-user-3-fill"></i>4</span></h4>
                        <h5>2 mins away </h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
                        
                    </div>
                    <h2 className="text-xl font-semibold">₹193.20</h2>
                </div>

            </div>
        </div>
    )
}

export default Home;
