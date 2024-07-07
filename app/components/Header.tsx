"use client";
import { useState } from "react";
import { NavigationMenuDemo } from "./Navbar";

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="blur-bg flex justify-between items-center p-4 sticky top-0 z-50">
      <h1 className="text-lg lg:text-xl font-bold">STEALTHY WHISKERS</h1>
      <div className="hidden lg:flex gap-2 items-center">
        <NavigationMenuDemo />
        <label htmlFor="search" className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 border rounded"
          />
        </label>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Bag
        </button>
      </div>
      <button className="lg:hidden text-3xl" onClick={() => setOpened(!opened)}>
        &#9776;
      </button>
      {opened && (
        <div className="lg:hidden absolute top-16 left-0 w-full h-full shadow-lg p-4">
          <NavigationMenuDemo />
          <label htmlFor="search" className="block my-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-2 py-1 border rounded"
            />
          </label>
          <button className="bg-blue-500 text-white w-full py-2 rounded my-1">
            Sign In
          </button>
          <button className="bg-blue-500 text-white w-full py-2 rounded my-1">
            Bag
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
