import React from "react";
import AboveSelector from "./AboveSelecote";
import Location from "./Location";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import PricePerNight from "./PricePerNight";
import SearchBtn from "../Header/SearchBtn";
import EEE from "../Flight/EEE";
import HotelCard from "./HotelCard";


function Hotel() {
  return (
    <div className="h-auto w-300 mx-10">
      <div className="bg-white h-auto py-3 px-18 w-300 mt-[-24.5em] z-[-4] pt-15 rounded-3xl ">
        <AboveSelector />
        <div className=" py-2 pb-8 flex flex-row">
            <Location/>
            <CheckIn/>
            <CheckOut/>
            <PricePerNight/>
        </div>

        <div >
            <SearchBtn/>
          </div>  
      </div>
      <div className="mt-6 mb-25">
        <EEE/>
       </div  >

       <div className="mt-6 mb-25">
        <HotelCard/>
        
       </div>
    </div>
  );
}

export default Hotel;
