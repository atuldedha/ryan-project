import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import data from "./components/Result/staticData";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [companyData, setCompanyData] = useState(data);
  const [resultData, setResultData] = useState(data);

  const removeDuplicates = (arr) => {
    return arr?.filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
  };

  const handleFilter = (
    searchLocation,
    javaScriptChecked,
    pythonChecked,
    javaChecked
  ) => {
    const temp = [];
    if (searchLocation.length > 0) {
      companyData?.map((item) => {
        if (
          item.location
            .toLocaleLowerCase()
            .includes(searchLocation.toLocaleLowerCase())
        ) {
          temp.push(item);
        }
      });
      setResultData(temp);
    } else if (javaChecked || javaScriptChecked || pythonChecked) {
      companyData?.map((item) => {
        if (javaChecked) {
          item.tags.map((tag) => {
            if (tag.toLocaleLowerCase() === "java") {
              temp.push(item);
            }
          });
        }
        if (pythonChecked) {
          item.tags.map((tag) => {
            if (tag.toLocaleLowerCase() === "python") {
              temp.push(item);
            }
          });
        }
        if (javaScriptChecked) {
          item.tags.map((tag) => {
            if (tag.toLocaleLowerCase() === "javascript") {
              temp.push(item);
            }
          });
        }
      });
      setResultData(removeDuplicates(temp));
    }

    // temp?.map((item) => {
    //   if(javaScriptChecked){}
    // })

    if (
      searchLocation.length === 0 &&
      !javaScriptChecked &&
      !pythonChecked &&
      !javaChecked
    ) {
      setResultData(companyData);
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
