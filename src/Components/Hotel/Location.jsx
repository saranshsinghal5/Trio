import React from 'react'
import { useState } from "react";

function Location() {

  const [selectedLocation, setSelectedLocation] = useState("Goa");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const locations = ["Mumbai", "Bengaluru", "Goa", "Chennai", "Dubai", "Jaipur"];

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="relative w-80">
     
      <div
        className=" p-[1.1em] rounded-l-lg  bg-white shadow-md cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <p className="text-gray-500 text-sm">City, Property Name Or Location</p>
        <h2 className="text-xl font-bold">{selectedLocation}</h2>
        <p className="text-gray-400 text-sm">India</p>
      </div>

    
      {isDropdownOpen && (
        <div className="absolute w-full mt-2 bg-white shadow-lg rounded-lg p-2 z-10">
         
          <input
            type="text"
            placeholder="Where do you want to stay?"
            className="w-full p-2 border-b outline-none text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        
          <ul className="max-h-48 overflow-y-auto">
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer hover:bg-gray-100 ${
                  selectedLocation === location ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  setSelectedLocation(location);
                  setIsDropdownOpen(false);
                  setSearchTerm("");
                }}
              >
                {location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Location



