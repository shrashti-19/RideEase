import React from "react";

const locations = [
    "24B, Near Kapoor's Cafe, Shreiyans Coding School, Bhopal",
    "45A, Near Cyber Hub, Tech Park, Indore",
    "12C, MG Road, Software Street, Pune",
    "98B, Main Market, IT Plaza, Bangalore"
];

const LocalSearchPanel = ({ setVehiclePanel, setPanelOpen }) => {
    return (
        <div>
            {locations.map((location, index) => (
                <div 
                    key={index} 
                    onClick={() => {
                        setVehiclePanel(true);
                        setPanelOpen(true); // Ensure this function is passed as a prop
                    }}
                    className="flex gap-4 border-2 p-3 border-gray-200 hover:bg-black hover:text-white items-center my-2 justify-start cursor-pointer transition-all"
                >
                    <h2 className="bg-gray-200 h-10 flex items-center justify-center w-12 rounded-full">
                        <i className="ri-map-pin-line"></i>
                    </h2>
                    <h4 className="font-medium">{location}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocalSearchPanel;
