import { useState } from "react";
import ResInfo from "./ResInfo";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const MenuCard = ({ menuItem, foodSelected }) => {
  const [isOpen, setIsOpen] = useState(true);
  if ("categories" in menuItem) {
    return (
      <div className=" my-4 px-2  ">
        <p className="text-black font-bold text-xl text-start w-full ">
          {menuItem.title}
        </p>
        <div className=" flex flex-col gap-2 ">
          {menuItem?.categories?.map((items, index) => (
            <div>
              <MenuCard key={items?.title || index} menuItem={items} foodSelected={foodSelected}></MenuCard>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (!isOpen) {
    return (
      <>
        <div className="flex items-center justify-between  px-2  ">
          <h1 className="text-black font-bold text-[10px] w-full text-start px-4 ">
            {menuItem?.title}
          </h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoIosArrowUp className="font-bold text-2xl text-black" />
            ) : (
              <IoIosArrowDown className="font-bold text-2xl text-black" />
            )}
          </button>
        </div>
        <div className="bg-gray-500 h-1 rounded w-9/10 mx-6 "></div>
      </>
    );
  }
  if (foodSelected === "veg") {
    return (
      <div className=" flex items-center justify-center w-full px-10 ">
        <div className=" enter pt-2  bg-white w-full    ">
          <div className="flex items-center justify-between ">
            <h1 className="text-gray-500 font-bold  text-start text-[14px] sm:text-[16px] lg:text-[20px] py-4 ">
              {menuItem?.title}
            </h1>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoIosArrowUp className="font-bold text-2xl text-black" />
              ) : (
                <IoIosArrowDown className="font-bold text-2xl text-black" />
              )}
            </button>
          </div>
          <div className=" h-30vh    ">
            <div className="flex flex-col gap-4">
              {menuItem?.itemCards
                ?.filter((food) => "isVeg" in food?.card?.info).map((items) => (
                  <ResInfo
                    key={items?.card?.info?.id}
                    resData={items?.card?.info}
                  ></ResInfo>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
    if (foodSelected === "nonveg") {
    return (
      <div className=" flex items-center justify-center w-full px-10 ">
        <div className=" enter pt-2  bg-white w-full    ">
          <div className="flex items-center justify-between ">
            <h1 className="text-gray-500 font-bold  text-start text-[14px] sm:text-[16px] lg:text-[20px] py-4 ">
              {menuItem?.title}
            </h1>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoIosArrowUp className="font-bold text-2xl text-black" />
              ) : (
                <IoIosArrowDown className="font-bold text-2xl text-black" />
              )}
            </button>
          </div>
          <div className=" h-30vh    ">
            <div className="flex flex-col gap-4">
              {menuItem?.itemCards
                ?.filter((food) => !("isVeg" in food?.card?.info)).map((items) => (
                  <ResInfo
                    key={items?.card?.info?.id}
                    resData={items?.card?.info}
                  ></ResInfo>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className=" flex items-center justify-center w-full px-10 ">
        <div className=" enter pt-2  bg-white w-full    ">
          <div className="flex items-center justify-between ">
            <h1 className="text-gray-500 font-bold  text-start text-[14px] sm:text-[16px] lg:text-[20px] py-4 ">
              {menuItem?.title}
            </h1>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoIosArrowUp className="font-bold text-2xl text-black" />
              ) : (
                <IoIosArrowDown className="font-bold text-2xl text-black" />
              )}
            </button>
          </div>
          <div className=" h-[30%]    ">
            <div className="flex flex-col gap-4">
              {menuItem?.itemCards?.map((items) => (
                <ResInfo
                  key={items?.card?.info?.id}
                  resData={items?.card?.info}
                ></ResInfo>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
