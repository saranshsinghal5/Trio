import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { FaChevronDown } from "react-icons/fa";

const CheckOut = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-60" ref={dropdownRef}>
      {/* Button to Toggle Date Picker */}
      <div
        className="border-none drop-shadow-lg p-4 cursor-pointer flex justify-between items-center bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <p className="text-gray-500 text-sm">Return</p>
          <p className="text-xl font-bold">{format(startDate, "dd MMM'")}</p>
          <p className="text-gray-500">{format(startDate, "EEEE")}</p>
        </div>
        <FaChevronDown className="text-blue-500" />
      </div>

      {/* Date Picker */}
      {isOpen && (
        <div className="absolute mt-2 z-10 bg-white p-4 shadow-lg rounded-lg">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setIsOpen(false);
            }}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default CheckOut;
