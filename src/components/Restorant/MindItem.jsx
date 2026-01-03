import React from "react";

const MindItem = ({item}) => {
  return (
    <>
      <a className=" min-h-64 min-w-42 " href={item?.action?.link}>
        <img
          className="h-full"
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

export default MindItem;
