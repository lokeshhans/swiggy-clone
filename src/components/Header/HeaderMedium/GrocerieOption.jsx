import { groceries } from "../../../DATA/groceries";
import GrocerieItem from "./GrocerieItem";

const GrocerieOption = () => {
  return (
    <>
      <div className="w-full  flex flex-col items-center py-20 bg-white">
        <h1 className="text-black pb-[2%] font-semibold text-sm md:text-xl lg:text-3xl xl:text-4xl  text-start sm:w-full   w-[90%] px-[5%]  ">
          Shop groceries on Instamart
        </h1>
        <div className="px-auto  w-[80%] h-[30%]  flex flex-nowrap gap-8 overflow-auto   ">
          {groceries.map((item) => (
            <GrocerieItem key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GrocerieOption;
