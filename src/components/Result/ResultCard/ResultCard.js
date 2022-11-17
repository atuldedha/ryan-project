import React from "react";

const ResultCard = ({ image, title, pay, company, location, description }) => {
  return (
    <div className="flex items-center justify-between bg-white p-3 shadow-md border border-gray-300 rounded-lg">
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
    </div>
  );
};

export default ResultCard;
