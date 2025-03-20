import React from "react";
import AboveSelector from "./AboveSelector";
import From from "./From";
import To from "./To";
import Departure from "./Departure";
import Return from "./Return";
import BelowSelector from "./BelowSelector";
import EEE from "./EEE";
import SearchBtn from "../Header/SearchBtn";



function Flight() {
  return (
    <div className="h-auto w-300 mx-10 ">
      <div className="bg-white h-auto py-3 px-9 w-300 mt-[-24.5em] z-[-4] pt-15 rounded-3xl ">
        <AboveSelector/>
        <div className=" py-2 flex flex-row">
        <From/>
        <To/>
        <Departure/>
        <Return/>

        </div>
       
       <div className="pb-4"> <BelowSelector/></div>

        <SearchBtn/>
      </div>
       
       <div className="mt-10 mb-15">
        <EEE/>
       </div>
    </div>
  );
}

export default Flight;