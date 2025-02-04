import React from "react";
import { Link } from "react-router-dom";

const CaptainHome=()=>{
        return(
            <div>
                <div>
                    <div className="h-screen">
                        <div className="fixed p-3 top-0  w-screen flex items-center justify-between">
                            <img className="w-16 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yF-nFzNZSoDYqYDahDHQf5p2ttS3viGK3g&s" alt=""/>
                            <Link  to ='/captain-login' className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"> 
                            <i class="ri-logout-box-r-line"></i>
                            </Link>
                        
                        </div>
                
                    <div className="h-1/2"> 
                    <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Background"/>
                    </div>
                    <div className="h-1/2">
                    <div className='flex items-center justify-between'>
                <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                <div className='text-right'>
                  <h2 className='text-lg font-medium capitalize'></h2>
                  
                  <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
              </div>
        
              <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                  <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="ri-map-pin-user-fill"></i>
                    <div>
                      <h3 className='text-lg font-medium'>562/11-A</h3>
                      <p className='text-sm -mt-1 text-gray-600'>11-A Ahemdabad</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                      <h3 className='text-lg font-medium'>562/11-A</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-5 p-3'>
                    <i className="ri-currency-line"></i>
                    <div>
                      <h3 className='text-lg font-medium'>₹193.20 </h3>
                      <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
        
            <div>
        
            </div>
            <div className="w-full mt-5"></div>
                <button className="w-full mt-5 bg-green-500 text-white py-2 rounded">
                    Make Payment
                </button>
            </div>
        )
    }
    


export default CaptainHome;