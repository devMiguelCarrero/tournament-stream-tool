import React from "react";
import MainPanel from "../MainPanel/MainPanel";
import Player from "../ScoreBar/Player";
import "./SectionBar.scss";

const SectionBar = (props) => {
  return (
    <div className="stream-scores-bar">
      <Player className={`player-1`} player="1"></Player>
      <MainPanel />
      <Player className={`player-2`} player="2"></Player>
    </div>
  );
};

export default SectionBar;
