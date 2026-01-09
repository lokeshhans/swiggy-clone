import { food } from "../../../DATA/food";
import FoodItem from "./FoodItem";

const FoodOption = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-col items-center pt-[4%]  ">
        <h1 className="text-black pb-[2%] font-semibold text-sm md:text-xl lg:text-3xl xl:text-4xl  text-start sm:w-full   w-[90%] px-[5%]   ">
          Order our best food options
        </h1>
        <div className="px-auto w-[80%] h-[30%]  grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-flow-col  ">
          {food.map((item) => (
            <FoodItem key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodOption;
