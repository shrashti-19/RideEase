import react from 'react'

const RidePopUp = ()=>{
    return(
        <div>
            <h5
        className="p-3 text-center absolute w-[93%] top-0"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available</h3>
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
        <button onClick={()=>{
            
        }} className="w-full mt-5 bg-green-600 font-semibold p-2 rounded-lg">
          Confirm
        </button>
        <button onClick={()=>{
           
        }} className="w-full mt-1 bg-gray-200  text-gray-700 font-semibold p-2 rounded-lg">
          Ignore
        </button>
      </div>
        </div>
    )
}

export default RidePopUp;