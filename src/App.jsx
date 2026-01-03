
import { Outlet } from "react-router";
// import Home from "./components/Home/Home";
// import Restorant from "./components/Restorant/Restorant";


const App = () => {
  return (
    <div className=" ">
      <Outlet/>
      {/* <Home/>
      <Restorant/> */}
    </div>
  );
};

export default App;
