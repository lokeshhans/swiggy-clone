
const RestorandCard = ({item}) => {
  return (
    
    <a className=" transform transition delay-200 hover:scale-95 " href={item?.action?.link}>
        <div className="  ">
          <img
          className="min-w-68 h-48 rounded-2xl" 
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
           item?.info?.cloudinaryImageId
          }
          alt=""
        />
        </div>
        <div className="text-black ">
          <h1 className="font-bold  ">{item?.info?.name}</h1>
          <span className="font-bold text-sm ">{item.info.avgRating} - {item.info.sla.slaString}</span>
          <p className=" ">pizza </p>
          <p className="">{item?.info?.areaName } </p>
        </div>
      </a>
  )
}

export default RestorandCard