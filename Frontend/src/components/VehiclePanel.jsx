import React from "react";

const VehiclePanel = (props)=>{
    return(
    <div>
    <h5 className="p-3 text-center absolute w-[93%] top-0 " onClick={()=>{
        props.setVehiclePanelOpen(false);
    }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
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
    )
}

export default VehiclePanel;