import React from "react";
import { useLocation } from "react-router-dom";
import { Subtitle, Paragraph } from "../../../components";
import "./token.css";

const Token = () => {
  const ref = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/" && location.hash === "#token") {
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
        VXP TOKEN: The core of the Digital Fashion Ecosystem
      </Subtitle>
      <div className="vapor__possibility" id="token">
        <div className="vapor__possibility-content">
          <h3>Buy/Sell/Rent NFTs Wearables</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            The VXP token will be used to purchase digital clothing on the
            VaporXP NFT marketplace. The token will bridge the NFTs cross-chain
            for operability on various metaverses.
          </Paragraph>
          <h3>Exclusive Access</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            Holding VXP NFTs and/or Tokens will grant access to NFT drops and
            staking pools, acquire discount codes to the VaporXP physical store
            and much more.
          </Paragraph>
        </div>
        <div
          className="vapor__possibility-content"
          style={{ justifyContent: "center" }}
        >
          <h3>Rewards</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            Earn Tokens through NFT ownership or performing tasks. Hold Tokens
            or NFTs to win prizes, gift cards, physical products, or signed
            merchandise or artwork.
          </Paragraph>
        </div>
        <div className="vapor__possibility-content">
          <h3>Governance</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            Community voting on platform-based decisions. Open dialog on the
            direction of the digital fashion ecosystem.
          </Paragraph>
          <h3>Staking</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            The staking interface will lock tokens, reducing the circulating
            supply and earning rewards. Participants will have access to
            exclusive drops, contests, and other benefits.
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default Token;
