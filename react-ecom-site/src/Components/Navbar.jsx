import React, { useState } from "react";
import { GoPersonFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import toggleIcon from '/src/Components/images/toggle-icon.png';
import searchIcon from '/src/Components/images/search-icon.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full lg:w-[80%] ml-4 lg:ml-36 flex gap-4 lg:gap-8 bg-transparent p-2 z-20 absolute mt-8 lg:mt-40 items-center px-4">
      <img src={toggleIcon} alt="Toggle menu" className="cursor-pointer   " onClick={toggleMenu} />
      {isMenuOpen && (
        <div className="fixed left-0 top-0 flex flex-col justify-left pl-10 gap-6 text-lg lg:text-2xl w-48 lg:w-60 bg-neutral-900 text-white h-screen pt-16 transition-all duration-300 ease-in-out">
          <RxCross2 className="absolute right-6 top-6 cursor-pointer duration-300 hover:text-red-500" onClick={toggleMenu} />
          <Link to={"/"} className="duration-300 hover:text-red-500">Home</Link>
          <Link to="/fashion" className="duration-300 hover:text-red-500">Fashion</Link>
          <Link to="/electronics" className="duration-300 hover:text-red-500">Electronics</Link>
          <Link to="/jewellary" className="duration-300 hover:text-red-500">Jewellery</Link>
        </div>
      )}

      <select
        className=" hidden w-fit lg:block bg-neutral-900 text-white px-2 py-2 rounded shadow"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="" disabled hidden>All Categories</option>
        <option value="action">Action</option>
        <option value="another-action">Another Action</option>
        <option value="something-else">Something else here</option>
      </select>

      <div className="flex flex-1 place-content-center">
        <input type="text" className="py-1 pr-4 lg:pr-72 w-full lg:w-auto rounded-l-md pl-4" placeholder="Search This Blog" />
        <button className="bg-orange-600 p-2 px-4 rounded-r-md">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>

      <div className="duration-500 text-white hover:text-orange-600 flex gap-3 items-center">
        <FaShoppingCart className="text-xl" />
        <h2 className="hidden lg:block text-xl">CART</h2>
      </div>

      <div className="duration-500 text-white hover:text-orange-600 flex gap-3 items-center">
        <GoPersonFill className="text-xl" />
        <h2 className="hidden lg:block text-xl">PROFILE</h2>
      </div>
    </div>
  );
};

export default Navbar;


  