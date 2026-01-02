import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from './HeaderBottom.jsx'

const Header = () => {
  return (
    <header className="bg-[#ff5200] flex flex-col justify- h-screen justify-between ">
      <HeaderTop/>
      <HeaderMiddle/>
      <HeaderBottom/>
    </header>
  );
};

export default Header;
