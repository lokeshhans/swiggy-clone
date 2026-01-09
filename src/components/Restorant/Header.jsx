import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const cart = useSelector(state=>state.cartSlice.count)
  return (
    <div className="py-4 w-full  mx-auto px-8 text-xs md:text-sm lg:text bg-gray-400 flex items-center justify-between">
      <div>
        <p className="bg-orange-300 rounded-2xl px-2 py-2">Swiggy</p>
      </div>
      <div>
        <Link to={'/checkout'}>
        
        <p className="text-black hover:text-orange-300 text-xs font-bold ">Cart{cart}</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
