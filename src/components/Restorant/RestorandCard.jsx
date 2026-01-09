import { Link } from "react-router"

const RestorandCard = ({item}) => {
  return (
    
    <Link to={`/city/rohtak/${item?.info?.id}`} className=" transform transition delay-200 hover:scale-95 " href={item?.action?.link}>
        <div className="  ">
          <img
          className="min-w-60 w-60  md:w-72 lg:w-80 xl:w-3xl h-28 md:h-36 lg:h-40 xl:h- rounded-2xl" 
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
           item?.info?.cloudinaryImageId
          }
          alt=""
        />
        </div>
        <div className="text-black px-4 ">
          <h1 className="font-bold  ">{item?.info?.name}</h1>
          <span className="font-bold text-sm ">{item?.info?.avgRating} - {item?.info?.sla?.slaString}</span>
          <p className=" ">{item?.info?.cuisines[0]} </p>
          <p className="">{item?.info?.areaName } </p>
        </div>
      </Link>
  )
}

export default RestorandCard