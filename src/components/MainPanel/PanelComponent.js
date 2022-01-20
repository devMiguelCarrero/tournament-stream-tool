import React from "react";
import "./PanelComponent.scss";

const PanelComponent = (props) => {
  return (
    <div
      className={`stream-scores-bar__main-panel__component ${props.className}`}
    >
      {props.children}
    </div>
  );
};
export default PanelComponent;
