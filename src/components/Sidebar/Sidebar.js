import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Sidebar = ({ showSidebar, handleFilter }) => {
  const [open, setOpen] = useState(true);
  const [searchLocation, setSearchLocation] = useState("");
  const [javaScriptChecked, setJavaScriptChecked] = useState(false);
  const [pythonChecked, setPythonChecked] = useState(false);
  const [javaChecked, setJavaChecked] = useState(false);

  const handleSearch = () => {
    //API call to be made here with the search term and tags
    handleFilter(searchLocation, javaScriptChecked, pythonChecked, javaChecked);
  };
  return (
    <div
      className={`${
        !showSidebar
          ? "opacity-0 -translate-x-[500px] w-0 p-0"
          : "opacity-100 translate-x-[1px] w-60 md:w-72 h-screen sticky top-0 left-0 mt-px md:mt-0 p-5 md:p-10"
      } z-10 bg-white overflow-y-scroll transition-all duration-200 ease-in-out flex flex-col items-start border-l-[1px] border-l-gray-500 shadow-md`}
    >
      <input
        placeholder="enter location"
        onChange={(e) => setSearchLocation(e.target.value)}
        value={searchLocation}
        type="text"
        className="outline-none bg-gray-100 p-3 text-gray-400 placeholder:text-gray-400 rounded-md"
      />

      <div className="flex flex-col space-x-2 flex-grow mt-10">
        <div
          className="flex items-center space-x-4 hover:cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Search tag name */}
          <span className="text-sm text-gray-400 font-sans font-medium">
            Languages
          </span>
          {open ? (
            <ChevronUpIcon className="h-4 w-4 " />
          ) : (
            <ChevronDownIcon className="h-4 w-4 " />
          )}
        </div>

        {open && (
          //search options for languages
          <div className="flex flex-col mt-2">
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={javaScriptChecked}
                onChange={(e) => {
                  setJavaScriptChecked(e.target.checked);
                }}
              />
              <span className="text-base font-normal text-gray-500 font-sans">
                JavaScript
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={pythonChecked}
                onChange={(e) => {
                  setPythonChecked(e.target.checked);
                }}
              />
              <span className="text-base font-normal text-gray-500 font-sans">
                Pyhton
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={javaChecked}
                onChange={(e) => {
                  setJavaChecked(e.target.checked);
                }}
              />
              <span className="text-base font-normal text-gray-500 font-sans">
                Java
              </span>
            </div>
          </div>
        )}
      </div>

      <button
        className="p-2 bg-gray-800 text-gray-300 text-base hover:text-gray-100 hover:scale-105 w-full rounded-md text-center"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Sidebar;
