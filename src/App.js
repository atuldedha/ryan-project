import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import data from "./components/Result/staticData";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [companyData, setCompanyData] = useState(data);
  const [resultData, setResultData] = useState(data);

  const handleFilter = (
    searchLocation,
    javaScriptChecked,
    pythonChecked,
    javaChecked
  ) => {
    const temp = [];
    if (searchLocation.length > 0) {
      console.log(searchLocation);
      // setCompanyData(
      //   companyData.filter((item) => {
      //     console.log(item.location.includes(searchLocation));
      //     item.location.includes(searchLocation);
      //   })
      // );

      companyData?.map((item) => {
        if (
          item.location
            .toLocaleLowerCase()
            .includes(searchLocation.toLocaleLowerCase())
        ) {
          temp.push(item);
        }
      });
      console.log(temp);
      setResultData(temp);
    }
  };
  return (
    <div className="flex w-full">
      <Sidebar showSidebar={showSidebar} handleFilter={handleFilter} />
      <div className="flex flex-col w-full">
        <Header setShowSidebar={setShowSidebar} />

        <Result companyData={resultData} />
      </div>
    </div>
  );
}

export default App;
