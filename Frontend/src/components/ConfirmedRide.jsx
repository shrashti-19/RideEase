import React from "react";
const ConfirmedRide=(props)=>{
    return(
        <div>
            <h5 className="p-3 text-center absolute w-[93%] top-0" onClick={() => {
                props.setVehiclePanelOpen(false);
            }}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>
            <div className="flex gap-2 flex-col justify-between items-center">
               <img className="h-20 " src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="car-image"/>
               <div className="w-full ">
                <div>
                    <div>
                    <i className=" text-lg ri-map-pin-line"></i> 
                    <div className="flex items-center">
                        <h3>562/11-A</h3>
                        <p>Kankariya Talab, Ahemdabad</p>
                    </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>

               </div>
               <button className="w-full  bg-green-600 font-semibold p-2 rounded-lg">Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmedRide;