import React from "react";
import "./TournamentStage.scss";

const TournamentStage = (props) => {
  return (
    <div className="tournament-stage">{props.children}</div>
  );
};
export default TournamentStage;
