import React from "react";
import { useLocation } from "react-router-dom";
import { Subtitle, Paragraph } from "../../../components";
import "./roadmap.css";

const Roadmap = () => {
  const ref = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/" && location.hash === "#team") {
      ref.current.scrollIntoView();
    }
  });
  return (
    <>
      <div ref={ref} />
      <Subtitle
        style={{
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto",
          marginBottom: "3rem",
          paddingTop: 100,
        }}
      >
        {"TEAM & ROADMAP"}
      </Subtitle>
      <div className="vapor__possibility" id="roadmap">
        <div className="vapor__possibility-content">
          <h3>Q2 2022</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            NFT Marketplace and Initial Generative NFT Drop Granting Membership
            to VaporXP Community
            <br />
            <br />
            Grow VaporXP community and social channels
            <br />
            <br />
            Launch NFTs on first partner platform. Digital wearables will
          </Paragraph>
        </div>
        <div className="vapor__possibility-content">
          <h3>Q3 2022</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            Launch Exclusive NFT Drop to members of VaporXP community. Release
            first line of affordable Digital Wearables.
            <br />
            <br />
            Token Generation Event for VXP token and create staking pools.
            <br />
            <br />
            Connect physical store.
            <br />
            <br />
            Launch NFTs on additional partner metaverse platforms.
          </Paragraph>
        </div>
        <div className="vapor__possibility-content">
          <h3>Q4 2022</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            Release additional exclusive NFT drops and expand artist portfolio.
            Port over wearables from Vapor95.com and other designers to NFTs.
            <br />
            <br />
            Release digital fashion lines to additional metaverse platforms.
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
