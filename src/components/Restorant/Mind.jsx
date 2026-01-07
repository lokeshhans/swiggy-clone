import { useEffect, useState } from "react";
import MindItem from "./MindItem";
import axios from "axios";
import Shimmer from "./Shimmer";
const proxyServer = "https://proxy.corsfix.com/?";

const swiggyAPI =
  "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.8964&lng=76.5909&carousel=true&third_party_vendor=1";
const Mind = () => {
  const [MindData, setMindData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const RestData = await axios.get(proxyServer + swiggyAPI);
      const data = await RestData?.data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      setMindData(data);
    }
    fetchData();
  }, []);
  // console.log(MindData);
  return (
    <>
      <div className="w-full  flex flex-col items-center pt-20  bg-white">
        <h1 className="text-black font-bold text-3xl text-start w-[80%] px-auto  ">
          What's on your mind?
        </h1>
        <div className="px-auto  w-[80%] h-30vh    ">
          <div className="flex flex-nowrap overflow-auto gap-4">
            {MindData.length == 0 ? <Shimmer/> : MindData.map((item) => (
              <MindItem key={item?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mind;
