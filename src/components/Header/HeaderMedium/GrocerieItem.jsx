
const GrocerieItem = ({item}) => {
  return (
    <>
      <a className=" " href={item?.action?.link}>
        <img
          className="h-20 w-30 lg:w-30 lg:h-30 xl:w-40 xl:h-40 max-h-60 max-w-60 "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            item?.imageId
          }
          alt=""
        />
        <h1 className="text-black text-center">{item?.action?.text}</h1>
      </a>
    </>
  )
}

export default GrocerieItem