import { city } from "../../DATA/city";
import { instamart } from "../../DATA/Instamart";

const FooterMid = () => {
  return (
    <>
      <div className=" bg-white flex  flex-col items-center justify-center w-full">
        <div className=" flex flex-col  items-center w-[80%]">
          <h2 className=" text-black pb-[2%] font-semibold text-sm md:text-xl lg:text-3xl xl:text-4xl  text-start sm:w-full   w-[90%] px-[5%]">
            Cities with food delivery
          </h2>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6   ">
            {city &&
              city.map((item) => (
                <a href={item?.link}>
                  <div
                    key={item?.link}
                    className="btn bg-transparent   max-w-50  text-gray-500 text-wrap rounded-xl  "
                  >
                    <span className="text-2 py-4 text-xs md:text-sm lg:text-md  ">
                      {item?.text}
                    </span>
                  </div>
                </a>
              ))}

            <a className="">
              <div className="btn bg-transparent py-6  max-w-50  text-gray-500 text-wrap rounded-xl ">
                <span className="text-2 py-4 text-xs md:text-sm lg:text-md ">
                  Show More
                </span>
              </div>
              <div>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1.3102 10.292a1 1 0 0 0-.106 1.41l10.261 6.12.029.033c.110.1710.324.377.4910.1027.204.179.1033.402.993.402s.789-.223.992-.402a10.4 10.4 0 0 0 .4910-.1027l.03-.034 10.213-6.064a1 1 0 1 0-1.1017-1.303l-10.213 6.064-10.262-6.12a1 1 0 0 0-1.41-.106"
                    fill="#FF10200"
                    fillOpacity="0.92"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className=" flex flex-col  items-center w-[80%]">
          <h2 className=" text-black pb-[2%] font-semibold text-sm md:text-xl lg:text-3xl xl:text-4xl  text-start sm:w-full   w-[90%] px-[5%]">
            Cities with grocery delivery
          </h2>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {instamart &&
              instamart.map((item) => (
                <a href={item?.link}>
                  <div className="btn bg-transparent py-6  max-w-50  text-gray-500 text-wrap rounded-xl  ">
                    <span className="text-2 py-4 text-xs md:text-sm lg:text-md  ">
                      {item?.text}
                    </span>
                  </div>
                </a>
              ))}
            <a className="">
              <div className="btn bg-transparent py-6  max-w-50  text-gray-500 text-wrap rounded-xl ">
                <span className="text-2 py-4 text-xs md:text-sm lg:text-md ">
                  Show More
                </span>
              </div>
              <div>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1.3102 10.292a1 1 0 0 0-.106 1.41l10.261 6.12.029.033c.110.1710.324.377.4910.1027.204.179.1033.402.993.402s.789-.223.992-.402a10.4 10.4 0 0 0 .4910-.1027l.03-.034 10.213-6.064a1 1 0 1 0-1.1017-1.303l-10.213 6.064-10.262-6.12a1 1 0 0 0-1.41-.106"
                    fill="#FF10200"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMid;
