"use client";
import { useState } from "react";
import { NavigationMenuDemo } from "./Navbar";

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="bg-white flex justify-between items-center p-4 sticky top-0 z-50">
      <h1 className="text-lg lg:text-xl font-bold">STEALTHY WHISKERS</h1>
      <div className="hidden lg:flex gap-2 items-center">
        <NavigationMenuDemo />
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-2 py-1 border rounded"
          />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In
        </button>
        <button className="text-3xl">&#x1F6D2;</button>
      </div>

      <div className="flex gap-4 items-center lg:hidden">
        <button className=" text-3xl">&#x1F6D2;</button>
        <button className="text-3xl" onClick={() => setOpened(!opened)}>
          &#9776;
        </button>
      </div>
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
        </div>
      )}
    </div>
  );
};

export default Header;
