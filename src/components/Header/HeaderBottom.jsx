import React from "react";
import { Link } from "react-router";

const HeaderBottom = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <Link to={'/restorant'} >
          <img  className="w-xl h-96"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"
            alt=""
          />
        </Link>
      </div>
      <div className="">
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img className="w-xl h-96"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default HeaderBottom;
