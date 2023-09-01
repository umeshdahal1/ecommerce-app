import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // Event Listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header className={`${isActive ? " bg-red-400" : " bg-blue-400"}`}>
      <div className=" container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img
              className=" w-24"
              src="https://img.freepik.com/premium-vector/online-shop-logo-designs-concept-vector-online-store-logo-designs_7649-661.jpg?w=2000 "
              alt="logo"
            />
          </div>
        </Link>
        {/* Cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" cursor-pointer flex relative "
        >
          <BsBag className=" text-2xl" />
          <div className=" bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png
