import React from "react";
import "./Player.scss";
import NameBox from "./NameBox";
import ScoreBox from "./ScoreBox";
import meta_data from "../../data.json";

const Player = (props) => {
  return (
    <div className={`stream-scores-bar__player ${props.className}`}>
      <NameBox>
        <p>
          {props.player === "2" &&
            meta_data.players[`player_${props.player}`].tag !== "" &&
            `${meta_data.players[`player_${props.player}`].tag} | `}
          {meta_data.players[`player_${props.player}`].name}
          {props.player === "1" &&
            meta_data.players[`player_${props.player}`].tag !== "" &&
            ` | ${meta_data.players[`player_${props.player}`].tag}`}
        </p>
      </NameBox>
      <ScoreBox>
        <p>{meta_data.players[`player_${props.player}`].score}</p>
      </ScoreBox>
    </div>
  );
};

export default Player;
