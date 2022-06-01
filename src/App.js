import "./normalize.scss";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import MainArea from "./components/UI/MainArea";
import SectionBar from "./components/SectionBar/SectionBar";
const App = () => {
  const [StreamData, setStreamData] = useState(null);

  Axios.defaults.headers = {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  };

  useEffect(() => {
    const dataInterval = setInterval(async () => {
      const response = await Axios.get("./data/data.json");
      setStreamData(response.data);
    }, 2000);
    return () => clearInterval(dataInterval);
  }, [StreamData, setStreamData]);

  return (
    StreamData && (
      <MainArea>
        <SectionBar StreamData={StreamData}></SectionBar>
      </MainArea>
    )
  );
};
export default App;
