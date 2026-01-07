import axios from "axios";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { useParams } from "react-router";

const RestorantMenu = () => {
  const { id } = useParams();
  const [ResData, setResData] = useState([]);
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
      {ResData.map((menuItems) => (
        <MenuCard
          key={menuItems?.card?.card?.title}
          menuItem={menuItems?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestorantMenu;
