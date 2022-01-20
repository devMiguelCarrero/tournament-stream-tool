import React from "react";

import "./ScoreBox.scss";

const ScoreBox = (props) => {
  return <div className="stream-scores-box">{props.children}</div>;
};

export default ScoreBox;
