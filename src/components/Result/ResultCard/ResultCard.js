/* eslint-disable no-lone-blocks */
import React from "react";

const ResultCard = ({ image, title, pay, company, location, description }) => {
  return (
    // {Activate this for grid style 3 per column}
    <div className="flex flex-col space-y-4 bg-white p-3 shadow-md border border-gray-300 rounded-lg">
      <div className="flex flex-col basis-1/2">
        <div className="w-full flex justify-center items-center">
          <img
            src={image}
            alt="pic"
            className="h-18 w-10 object-contain rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <span>Title: {title}</span>
          <span>Company: {company}</span>
          <span>Location: {location}</span>
          <span>Pay: {pay}</span>
        </div>
      </div>

      <div className="basis-1/2">
        <span>Description: {description}</span>
      </div>
    </div>
  );
};

export default ResultCard;

//Activate this div if you activate flex box through the Result compoenent
{
  /* <div className="flex bg-white p-3 shadow-md border border-gray-300 rounded-lg">
<div className="flex basis-1/2 space-x-4">
  <img
    src={image}
    alt="pic"
    className="h-18 w-10 object-contain rounded-md"
  />

  <div className="flex flex-col">
    <span>Title: {title}</span>
    <span>Company: {company}</span>
    <span>Location: {location}</span>
    <span>Pay: {pay}</span>
  </div>
</div>

<div className="basis-1/2">
  <span>Description: {description}</span>
</div>
</div> */
}
