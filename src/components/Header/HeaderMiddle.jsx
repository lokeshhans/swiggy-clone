import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const HeaderMiddle = () => {
  return (
    <>
      <div className="flex items-center justify-center h-40 gap-2.5">
        <img
          className="h-3/4 absolute left-0 top-10"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />
        <div className="input w-25/100 flex rounded-xl py-6 bg-white">
          <FaLocationDot className="text-[#ff5200] text-2xl" />
          <input
            type="text"
            className="h-auto  text-gray-700 font-bold"
            placeholder="Enter your delivery Location "
          />
          <MdOutlineKeyboardArrowDown className="text-black text-3xl" />
        </div>
        <div className="input w-35/100 rounded-xl py-6 bg-white">
          <a href="https://www.swiggy.com/search " className="w-full">
            <input
              type="text"
              className="h-auto  text-gray-700 font-bold "
              placeholder="search for restorant, item or smore"
            />
          </a>
            <IoMdSearch className="text-gray-800 text-2xl" />
        </div>
        <img
          className="h-3/4 top-10 absolute right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />
      </div>
    </>
  );
};

export default HeaderMiddle;
