import { useState } from "react";
import ResInfo from "./ResInfo";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const MenuCard = ({ menuItem, foodSelected }) => {
  const [isOpen, setIsOpen] = useState(true);
  if ("categories" in menuItem) {
    return (
      <div className="w-full max-w-5xl mx-auto my-6    ">
        <p className="text-black font-bold text-xl text-start w-full ">
          {menuItem.title}
        </p>
        <div className=" flex flex-col gap-6 ">
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
        <div className="flex items-center justify-between w-full px-20 ">
          <h1 className="text-black font-bold text-sm text-start    py-4 ">
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
        <div className="bg-gray-500 h-2 rounded w-9/10 "></div>
      </>
    );
  }
  if (foodSelected === "veg") {
    return (
      <div className=" flex items-center justify-center   px-20">
        <div className=" enter pt-20  bg-white w-full   ">
          <div className="flex items-center justify-between">
            <h1 className="text-black font-bold text-2xl text-start    py-4 ">
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
      <div className=" flex items-center justify-center   px-20">
        <div className=" enter pt-20  bg-white w-full   ">
          <div className="flex items-center justify-between">
            <h1 className="text-black font-bold text-2xl text-start    py-4 ">
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
      <div className=" flex items-center justify-center   px-20">
        <div className=" enter pt-20  bg-white w-full   ">
          <div className="flex items-center justify-between">
            <h1 className="text-black font-bold text-2xl text-start    py-4 ">
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
