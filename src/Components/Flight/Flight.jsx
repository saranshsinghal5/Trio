import React, { useState } from "react";
import AboveSelector from "./AboveSelector";
import From from "./From";
import To from "./To";
import Departure from "./Departure";
import Return from "./Return";
import BelowSelector from "./BelowSelector";
import EEE from "./EEE";
import SearchBtn from "../Header/SearchBtn";
import FlightCards from "./FlightsCard";

function Flight() {
  // State to track which dropdown is currently open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle dropdown toggle
  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <div className="h-auto w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      {/* Flight Search Form */}
      <div className="bg-white h-auto py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full mt-[-24.5em] md:mt-[1em] lg:mt-[-1em] xl:mt-[-2em] 2xl:mt-[-3em] z-[-4] pt-15 rounded-3xl shadow-lg">
        <AboveSelector />
        <div className="py-4 flex flex-col md:flex-row flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <From
              isOpen={openDropdown === "from"}
              onToggle={() => handleDropdownToggle("from")}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <To
              isOpen={openDropdown === "to"}
              onToggle={() => handleDropdownToggle("to")}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <Departure
              isOpen={openDropdown === "departure"}
              onToggle={() => handleDropdownToggle("departure")}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <Return
              isOpen={openDropdown === "return"}
              onToggle={() => handleDropdownToggle("return")}
            />
          </div>
        </div>
        <div className="pb-4">
          <BelowSelector />
        </div>
        <div className="flex h-1 justify-center">
          <SearchBtn />
        </div>
      </div>

      {/* EEE Section */}
      <div className="mt-10 mb-10 md:mb-15 lg:mb-20 xl:mb-25 2xl:mb-30">
        <EEE />
      </div>

      {/* Flight Cards Section */}
      <div className="mt-5 mb-10 md:mb-15 lg:mb-20 xl:mb-25 2xl:mb-30">
        <FlightCards />
      </div>
    </div>
  );
}

export default Flight;