import React from "react";
import "./MainPanel.scss";
import Logo from "../../assets/img/ths-logo.png";
import BrandImage from "./BrandImage";
import AsusLogo from "../../assets/img/asus-logo.png";
import PanelComponent from "./PanelComponent";
import meta_data from "../../data.json";
import TournamentStage from "./TournamentStage";
import Shinji from "../../assets/img/shinji.jpg";
import SponsorCarousel from "../SponsorCarousel/SponsorCarousel";

const MainPanel = (props) => {
  return (
    <div className="stream-scores-bar__main-panel">
      {props.children}
      <PanelComponent className="stream-scores-bar__main-panel__component--brand">
        <BrandImage className="brand-image" src={Logo} />
      </PanelComponent>
      <PanelComponent className="stream-scores-bar__main-panel__component--publicity">
        <SponsorCarousel transitionTime={5000} />
      </PanelComponent>
      <PanelComponent className="stream-scores-bar__main-panel__component--info">
        <TournamentStage>
          <p>{props.stage}</p>
        </TournamentStage>
      </PanelComponent>
    </div>
  );
};
export default MainPanel;
