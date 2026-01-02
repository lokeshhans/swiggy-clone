import { food } from "../DATA/food";
import FoodItem from "./FoodItem";

const Second = () => {
  return (
    <>
      <div className="w-full  flex flex-col items-center pt-20  bg-white">
        <h1 className="text-black font-bold text-3xl text-start w-[80%] px-auto  ">
          Order our best food options
        </h1>
        <div className="px-auto  w-[80%] h-30vh  grid grid-rows-2 grid-flow-col  ">
          {food.map((item) => (
            <FoodItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Second;
