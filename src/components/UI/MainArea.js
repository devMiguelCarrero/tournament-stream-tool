import React from "react";
import "./MainArea.scss";

const MainArea = (props) => {
  return <main className="stream-main-area">{props.children}</main>;
};
export default MainArea;
