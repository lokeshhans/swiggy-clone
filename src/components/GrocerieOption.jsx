import { groceries } from "../DATA/groceries";
import GrocerieItem from "./GrocerieItem";

const GrocerieOption = () => {
  return (
    <>
      <div className="w-full  flex flex-col items-center py-20 bg-white">
        <h1 className="text-black font-bold text-3xl text-start w-[80%] px-auto pb-3  ">
          Shop groceries on Instamart
        </h1>
        <div className="px-auto  w-[80%] h-30vh flex flex-nowrap gap-8 overflow-auto   ">
          {groceries.map((item) => (
            <GrocerieItem key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GrocerieOption;
