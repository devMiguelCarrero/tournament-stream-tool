import React from "react";
import "./MainPanel.scss";
import Logo from "../../assets/img/ths-logo.png";
import BrandImage from "./BrandImage";
import AsusLogo from "../../assets/img/asus-logo.png";
import PanelComponent from "./PanelComponent";
import meta_data from "../../data.json";
import TournamentStage from "./TournamentStage";
import Shinji from "../../assets/img/shinji.jpg";

const MainPanel = (props) => {
  return (
    <div className="stream-scores-bar__main-panel">
      {props.children}
      <PanelComponent className="stream-scores-bar__main-panel__component--brand">
        <BrandImage className="brand-image" src={Logo} />
      </PanelComponent>
      <PanelComponent className="stream-scores-bar__main-panel__component--publicity">
        <BrandImage className="brand-image" src={AsusLogo} />
      </PanelComponent>
      <PanelComponent className="stream-scores-bar__main-panel__component--info">
        <TournamentStage>
          <p>{meta_data.tournament_stage}</p>
        </TournamentStage>
      </PanelComponent>
    </div>
  );
};
export default MainPanel;
