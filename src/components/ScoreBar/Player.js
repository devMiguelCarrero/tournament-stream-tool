import React from "react";
import "./Player.scss";
import NameBox from "./NameBox";
import ScoreBox from "./ScoreBox";
import meta_data from "../../data.json";

const Player = (props) => {
  const { player, dataPlayer } = props;

  return (
    <div className={`stream-scores-bar__player ${props.className}`}>
      <NameBox>
        <p>
          {player === "2" && dataPlayer.tag !== "" && `${dataPlayer.tag} | `}
          {dataPlayer.name}
          {player === "1" && dataPlayer.tag !== "" && ` | ${dataPlayer.tag}`}
        </p>
      </NameBox>
      <ScoreBox>
        <p>{dataPlayer.score}</p>
      </ScoreBox>
    </div>
  );
};

export default Player;
