import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div id="name" className="text-xl font-medium">Basit</div>

        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink">Home</li>
          <li className="menuLink">Projects</li>
          <li className="menuLink">Skills</li>
          <li className="menuLink">About</li>
          <li className="menuLink">Contact</li>
        </ul>

        <AiOutlineMenu className="md:hidden" size={30} />
      </div>
    </div>
  );
};

export default Navbar;