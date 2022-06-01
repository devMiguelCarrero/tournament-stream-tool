import React from "react";

import "./NameBox.scss";

const NameBox = (props) => {
  return <div className="stream-name-box">{props.children}</div>;
};
export default NameBox;
