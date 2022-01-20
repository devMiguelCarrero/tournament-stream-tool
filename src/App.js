import "./normalize.scss";
import React from "react";
import MainArea from "./components/UI/MainArea";
import meta_data from "./data.json";
import SectionBar from "./components/SectionBar/SectionBar";

const App = () => {
  console.log(meta_data);

  return (
    <MainArea>
      <SectionBar></SectionBar>
    </MainArea>
  );
};
export default App;
