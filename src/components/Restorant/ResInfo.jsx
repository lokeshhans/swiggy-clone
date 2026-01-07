const ResInfo = ({ resData }) => {
  // console.log(resData)
  return (
    <>
      <div className=" border-b-2 font-semibold  w-full text-black py-4 ">
        <div className="flex w-full justify-between  items-center pb-6 ">
          <div className=" px-4 py-2  ">
            <p className="">{resData?.name}</p>
            {resData.dafaultPrice ? (
              <p>{"🪙" + resData?.defaultPrice / 100}</p>
            ) : (
              ""
            )}
            {resData?.ratings?.aggregatedRating?.rating ? (
              <p>{"⭐" + resData?.ratings?.aggregatedRating?.rating}</p>
            ) : (
              ""
            )}
            <p className="text-sm text-gray-500">{resData?.description}</p>
          </div>
          <div className="w-[20%] relative flex flex-col items-center justify-center  ">
            <img
              className=" min-w-52 min-h-36 h-36 rounded object-cover "
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                resData?.imageId
              }
              alt=""
            />
            <button className="btn btn-success absolute top-32  text-green-100  px-8 py-2 font-bold text-center bg-white">
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResInfo;
