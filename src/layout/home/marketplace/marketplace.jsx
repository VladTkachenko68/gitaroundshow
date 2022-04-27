import React from "react";
import { useLocation } from "react-router-dom";
import { Subtitle, Paragraph } from "../../../components";
import "./marketplace.css";

const Marketplace = () => {
  const ref = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/" && location.hash === "#marketplace") {
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
        NFT MARKETPLACE OF DIGITAL WEARABLES - NEW WAY OF OWNING NFTS
      </Subtitle>
      <div className="vapor__possibility">
        <div className="vapor__possibility-content">
          <h3>Membership-Based Generative NFTS</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            Initial NFTs will grant holders membership to the VaporXP
            experience. Each NFT will qualify holder for future drops, our
            Discord, and other rewards available only to the VaporXP community.
          </Paragraph>
        </div>
        <div className="vapor__possibility-content">
          <h3>Exclusive High-Utility NFT Apparel Drops</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            VaporXP will showcase select artists to create and sell limited
            edition digital fashion pieces. Includes cobranded drops with
            partners, in-house designs and packed with utility and a physical
            item for each initial NFT purchaser. The physical item itself can be
            traded and redeemed for rewards as well.
          </Paragraph>
        </div>
        <div className="vapor__possibility-content">
          <h3>High volume and affordable Digital Wearable NFTs</h3>
          <Paragraph style={{ opacity: 0.9 }}>
            Vapor95.com’s entire collections of affordable digital wearables
            will be available to showcase in partner metaverse platforms.
            Includes items built for the digital world that can also be
            purchased as physical wearables.
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
