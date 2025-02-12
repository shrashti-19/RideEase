import React from "react";
import {Link} from "react-router-dom"
const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        className="p-3 text-center absolute w-[93%] top-0"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>
      <div className="flex gap-2 flex-col justify-between items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
          alt="car-image"
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahmedabad</p>
            </div>
          </div>

          {/* Second address section */}
          <div className="flex items-center gap-5 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahmedabad</p>
            </div>
          </div>

          {/* Price section */}
          <div className="flex items-center gap-5">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <Link to = '/captain-riding'className="w-full mt-1 flex justify-center bg-green-600 font-semibold p-3 rounded-lg"></Link>
        <button onClick={()=>{
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
        }} className=" w-full mt-1 bg-green-600 font-semibold p-3 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
