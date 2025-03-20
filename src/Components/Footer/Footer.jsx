import React from "react";
import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";

function Footer() {
  const contacts = [
    {
      image: "/mailImg.png",
      subheading: "Our Email:",
      data1: "contact@triointernational.net.in",
    },
    {
      image: "phone.png",
      subheading: "Our phone number:",
      data1: "+91471 4850254",
      data2: "+91471 4011121",
    },
    {
      image: "/location.png",
      subheading: "Our Address:",
      data1:
        "TC No. 22/2855-4 ,Savithri Building, 2nd Floor, Sankar Road, Sasthamangalam, Thiruvananthapuram-10",
    },
  ];

  return (
    <>
      <Link to="/footer">
      <div className="h-172 w-full p-8 pt-30 bg-[#033f7b] text-white">
      <div className=" flex gap-2">
        <div className="w-[30%]  flex flex-col">
          <img
            className="w-50  m-4 mx-7 mt-[-20px]  h-23"
            src="https://triointernational.net.in/wp-content/uploads/2023/07/01-7-6-1.png"
            alt=""
          />
          <p className=" font-mulish text-justify w-72 leading-6 tracking-wide mt-2 mx-5 text-sm [word-spacing:0.1em]">
            At 𝗧𝗥𝗜𝗢, we believe that every trip should be a masterpiece. Whether
            you’re seeking a relaxing beach getaway, an adventurous trek through
            the mountains, or a cultural immersion in a vibrant city, we have
            the expertise to turn your travel dreams into reality
          </p>
        </div>

        <div className="w-[26%] pl-10 flex flex-col">
          <div className="font-playfair pl-5 text-2xl">Contacts</div>
          <div className="pt-4">
            {contacts.map((elem, index) => (
              <div className="flex ">
                <div>
                  <img className=" h-7 w-7 mt-5 " src={elem.image} alt="img" />
                </div>
                <div className="ml-3">
                  <p className="font-playfair h-10 w-fit mt-4 content-center font-light text-lg">
                    {elem.subheading}
                  </p>
                  <div className="flex flex-col">
                    <a
                      className="font-mulish ml-1 text-blue-300 h-5 w-53 text-sm"
                      href=""
                    >
                      {elem.data1}
                    </a>
                    <a
                      className="font-mulish ml-1 text-blue-300 h-5 w-30 text-sm"
                      href=""
                    >
                      {elem.data2}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[15%] pl-10  flex flex-col ">
          <div className="font-playfair pl-5 text-2xl">Locations</div>
          <div className="font-mulish pl-10 pt-9 text-sm content-center">
            <p className="h-10">Trivandrum</p>
            <p className="h-10">Mumbai</p>
            <p className="h-10">Chennai</p>
            <p className="h-10">Bangalore</p>
          </div>
        </div>
        <div className=" w-[15%]  ml-23 pl- flex flex-col ">
          <div className="font-playfair pl-5 text-2xl">Quick Links</div>
          <div className="font-mulish pl-12 pt-9 text-sm flex flex-col">
            <a className="h-10" href="">
              Home
            </a>
            <a className="h-10" href="">
              About Us
            </a>
            <a className="h-10" href="">
              Packages
            </a>
            <a className="h-10" href="">
              Services
            </a>
            <a className="h-10" href="">
              Blog
            </a>
            <a className="h-10" href="">
              Contact Us
            </a>
          </div>
        </div>
      </div>
        <CopyRight/>    
      </div>
      </Link>

    </>
  );
}

export default Footer;
