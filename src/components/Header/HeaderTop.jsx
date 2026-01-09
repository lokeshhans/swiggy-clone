import { MdOutlineArrowOutward } from "react-icons/md";

const HeaderTop = () => {
  return (
    <>
      <div className="flex items-center justify-between sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-36 sm:py-2 md:py-4 lg:py-6 xl:py-8 py-10 w-full ">
        <div className="flex flex-col w-1/4">
          <img
            className="w-3/10 h-1/10"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-evenly w-3/4 gap-0.5 ">
          <div className="font-bold w-1/4">
            <a className="text-[10px] sm:text-sm lg:text-lg xl:text-xl text-nowrap " href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporte</a>
          </div>
          <div className="font-bold w-1/4">
            <a className="text-[10px] sm:text-sm lg:text-lg xl:text-xl text-nowrap " href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
          </div>
          <div className="flex w-1/4">
            <a  href="#" className="btn border-white bg-transparent font-bold rounded-xl sm:p-2 md:p-4 lg:p-6 xl:p-8 text-[10px] sm:text-sm lg:text-lg xl:text-xl text-nowrap">
              Get the App
              <span>
                <MdOutlineArrowOutward />
              </span>
            </a>
          </div>
          <div className="w-1/4">
            <a className="btn border-white bg-black font-bold rounded-xl sm:p-2 md:p-4 lg:p-6 xl:p-8 text-[10px]   sm:text-sm lg:text-lg xl:text-xl text-nowrapl ">
              <span className="y">Sign in</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
