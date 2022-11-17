import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = ({ setShowSidebar }) => {
  return (
    <div className="w-full flex items-center py-5 bg-white shadow-md rounded-md">
      <Bars3Icon
        className="w-6 h-6 text-gray1 ml-5 hover:cursor-pointer hover:text-gray-300"
        onClick={() => setShowSidebar((prev) => !prev)}
      />
      <span className="text-[#48c2f5] font-serif ml-10 text-2xl tracking-wide font-semibold">
        CS<span className="text-gray-600">earch</span>
      </span>
    </div>
  );
};

export default Header;
