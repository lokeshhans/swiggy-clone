import axios from "axios";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { useParams } from "react-router";
import MenuShimmer from "./MenuShimmer";

const RestorantMenu = () => {
  const { id } = useParams();
  const [ResData, setResData] = useState([]);
  const [selected, setSelected] = useState(null);
  const proxyServer = "https://proxy.corsfix.com/?";
  const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.8964&lng=76.5909&restaurantId=${id}&submitAction=ENTER`;
  useEffect(() => {
    async function fetchData() {
      const RestData = await axios.get(proxyServer + swiggyAPI);
      const data = await RestData?.data?.data?.cards[5]?.groupedCard
        ?.cardGroupMap?.REGULAR?.cards;
      const filterData = data.filter((items) => "title" in items?.card?.card);
      setResData(filterData);
    }
    fetchData();
  }, []);
  // console.log(ResData);
  // console.log(id)
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white ">
      <div className="w-1/2 h-10 flex items-center justify-center gap-20  mt-10 ">
        <button
          className={`btn text-green-400 ${
            selected == "veg" ? "bg-white" : "bg-gray-300"
          } `}
          onClick={() => {
            setSelected(selected === "veg" ? null : "veg");
          }}
        >
          Veg
        </button>
        <button
          className={`btn text-green-400 ${
            selected == "nonveg" ? "bg-white" : "bg-gray-300"
          }`}
          onClick={() => {
            setSelected(selected === "nonveg" ? null : "nonveg");
          }}
        >
          Non Veg
        </button>
      </div>
      {ResData.length === 0 ? (
        <MenuShimmer />
      ) : (
        <div className="w-screen">
          {ResData.map((menuItems) => (
            <MenuCard
              key={menuItems?.card?.card?.title}
              menuItem={menuItems?.card?.card}
              foodSelected={selected}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestorantMenu;
