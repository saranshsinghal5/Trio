import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import RightImg from "./RightImg";

function Header() {
  const serviceData = [
    {
      image: "/Images/flight.png",
      purpose: "Flights",
      link: "flights",
    },
    {
      image: "/Images/hotel.png",
      purpose: "Hotels",
      link: "hotels",
    },
    {
      image: "/Images/cab.png",
      purpose: "Cabs",
      link: "cabs",
    },
    {
      image: "/Images/homestay.png",
      purpose: "Homestays & Villa",
      link: "homestay",
    },
    {
      image: "/Images/card.png",
      purpose: "Forex Card",
      link: "card",
    },
    {
      image: "/Images/insurance.png",
      purpose: "Travel Insurance",
      link: "insurance",
    },
    {
      image: "/Images/train.png",
      purpose: "Trains",
      link: "train",
    },
    {
      image: "/Images/bus.png",
      purpose: "Buses",
      link: "bus",
    },
    {
      image: "/Images/holiday.png",
      purpose: "Holiday packages",
      link: "holiday",
    },
  ];

  return (
    <>
      <Link to="/">
        <div className="h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px] w-full bg-left-bottom bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat">
          <div className="pt-2 flex flex-row place-content-between">
            <RightImg />
            <Navbar />
          </div>
          <div className="static h-[100px]  w-full xm:w-[90%] sm:w-[85%] md:w-[110%] lg:w-[90%] xl:w-[70%] 2xl:w-[65%] mx-auto">
            <Link to="/Flights">
              <div>
                <div className="w-full h-[100px] flex justify-center ml-[5%] bg-white md:w-[82%] lg:w-[77%] xl:w-[65%] 2xl:w-[60%] rounded-xl mt-12 drop-shadow-xl absolute">
                  <div className="pl-[1%] h-[100px]   rounded-lg gap-3 flex overflow-x-auto md:overflow-hidden ">
                    {serviceData.map((elem, index) => (
                      <NavLink
                        key={index}
                        to={elem.link}
                        className={({ isActive }) =>
                          `flex-shrink-0 ${
                            isActive ? "text-blue-500" : "text-gray-700"
                          }`
                        }
                      >
                        <div className="h-full w-auto flex flex-col items-center justify-center p-2">
                          <img
                            className="h-7 w-7"
                            src={elem.image}
                            alt={elem.purpose}
                          />
                          <p className="font-mulish text-sm font-semibold leading-4 tracking-tight text-center mt-2">
                            {elem.purpose}
                          </p>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Header;