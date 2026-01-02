
const GrocerieItem = ({item}) => {
  return (
    <>
      <a className=" " href={item?.action?.link}>
        <img
          className="min-h-40 min-w-40"
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