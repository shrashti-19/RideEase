import React from "react";
import { Link } from "react-router-dom";


const FinishRide = (props)=>{
    return(
        <div>
        <h5
    className="p-3 text-center absolute w-[93%] top-0"
    onClick={() => {
      props.setFinishRidePanel(false);
    }}
  >
    <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
  </h5>
  <h3 className="text-2xl font-semibold mb-5">Finish this ride
  </h3>
  <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
    <div className='flex items-center gap-3'>
      <img className="h-10 w-10 object-cover rounded-full " src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww' alt=""/>
      <h2 className='text-lg font-medium'>Harsh Patel</h2>
    </div>
    <h5 className='text-lg font-semibold '>2.2 Km</h5>

  </div>
  <div className="flex gap-2 flex-col justify-between items-center">
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
    <div className="mt-6 w-full">
       
       <Link to='/captain-home' className="w-full mt-2 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300 text-center block">
         Finish Ride
       </Link>
       
      
      
    </div>

  </div>
    </div>
    )
}

export default FinishRide;