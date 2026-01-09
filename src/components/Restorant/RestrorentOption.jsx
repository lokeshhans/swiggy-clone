import axios from "axios";
import { useEffect, useState } from "react";
import RestorandCard from "./RestorandCard";
import Shimmer from "./Shimmer";

const RestrorentOption = () => {
  const [ResData, setResData] = useState([]);
  const proxyServer = "https://proxy.corsfix.com/?";
  const swiggyAPI =
    "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.8964&lng=76.5909&carousel=true&third_party_vendor=1";
  useEffect(() => {
    async function fetchData() {
      const RestData = await axios.get(proxyServer + swiggyAPI);
      const data = await RestData?.data?.data?.cards[4]?.card?.card
        ?.gridElements?.infoWithStyle?.restaurants;
      setResData(data);
    }
    fetchData();
  }, []);
  // console.log(ResData);
  return (
    <>
      <hr />
      <div className="w-full   flex flex-col items-center pt-20  bg-white">
        <h1 className="w-[80%] px-auto text-black pb-[2%] font-semibold text-sm md:text-xl lg:text-3xl xl:text-4xl  text-start sm:w-full    px-[5%] ">
          Top restaurant chains in Rohtak
        </h1>
        <div className="px-auto  w-[80%] h-30vh    ">
          <div className="flex flex-nowrap overflow-auto gap-4">
            {ResData.length == 0 ? (
              <Shimmer />
            ) : (
              ResData.map((item) => (
                <RestorandCard key={item?.info?.id} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
      <hr />

      <div className="w-full  flex flex-col items-center pt-20  bg-white">
        <h1 className="w-[80%] px-auto text-black pb-[2%] font-semibold text-sm md:text-xl lg:text-3xl xl:text-4xl  text-start sm:w-full px-[5%] ">
          Restaurants with online food delivery in Rohtak
        </h1>
        <div className="px-auto w-[80%] h-[30%]    ">
          <div className="grid place-items-center  grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ResData.map((item) => (
              <RestorandCard key={item?.info?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestrorentOption;
