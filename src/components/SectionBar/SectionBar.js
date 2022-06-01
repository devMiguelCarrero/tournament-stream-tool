import React from "react";
import MainPanel from "../MainPanel/MainPanel";
import Player from "../ScoreBar/Player";
import "./SectionBar.scss";

const SectionBar = (props) => {
  return (
    <div className="stream-scores-bar">
      <Player dataPlayer={props.StreamData.players.player_1} className={`player-1`} player="1"></Player>
      <MainPanel stage={props.StreamData.tournament_stage} />
      <Player dataPlayer={props.StreamData.players.player_2} className={`player-2`} player="2"></Player>
    </div>
  );
};

export default SectionBar;
