import React from "react";

import "./NameBox.scss";
import ImageRandom from "../../assets/img/shinji.jpg";

const NameBox = (props) => {
  return (
    <div className="stream-name-box">
      <div className="flag">
        <img src={ImageRandom} />
      </div>
      {props.children}
    </div>
  );
};
export default NameBox;
