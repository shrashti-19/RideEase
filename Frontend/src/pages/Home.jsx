import React from "react";

const Home = ()=>{
    return(
        <div>
            <div className="h-screen flex justify-between flex-col w-full bg-red-400">
                <img src="public\Uber_logo_2018.png"/>
                <div className="bg-white">
                    <h2>Get Started with Uber</h2>
                   <button>Continue</button>
                </div>
            </div>
        </div>
    )
}
export default Home;