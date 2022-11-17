import React from "react";
import ResultCard from "./ResultCard/ResultCard";
import data from "./staticData";

const Result = ({ companyData }) => {
  return (
    <div className="flex flex-col space-y-4 mt-8 mx-4 mb-4">
      {companyData?.map((item, index) => (
        <ResultCard
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
          company={item.company}
          location={item.location}
          pay={item.pay}
        />
      ))}
    </div>
  );
};

export default Result;
