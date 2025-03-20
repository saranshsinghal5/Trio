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
        <div className=" h-140 w-full bg-left-bottom bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" >
        <div className=" pt-2 flex flex-row place-content-between">
            <RightImg/>
            <Navbar/>
        </div>
      <div className="static h-100 w-230">
        <Link to="/Flights">
          <div >
            <div className="w-[73%] bg-white h-25 rounded-xl mx-50 mt-12 absolute">
              <div className="pl-3 h-25 w-230 bg-white rounded-lg gap-3 flex drop-shadow-xl">
                {serviceData.map((elem, index) => (
                  <NavLink
                    to={elem.link}
                    className={({ isActive }) =>
                      ` ${isActive ? "text-blue-500" : " "}`
                    }
                  >
                    <div className="h-full w-auto ">
                      <img
                        className=" h-7 w-7 ml-1 place-self-center mt-2 "
                        src={elem.image}
                        alt={elem.purpose}
                      />
                      <p className=" font-mulish text-sm px-5 ml-1 py-2 font-semibold place-self-center leading-4 tracking-tight text-center">
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