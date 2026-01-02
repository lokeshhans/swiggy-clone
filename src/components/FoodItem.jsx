const FoodItem = ({ item }) => {
  return (
    <>
      <a className=" " href={item?.action?.link}>
        <img
          className="h-30"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            item?.imageId
          }
          alt=""
        />
      </a>
    </>
  );
};

export default FoodItem;
