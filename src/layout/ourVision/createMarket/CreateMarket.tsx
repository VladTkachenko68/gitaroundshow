import React from "react";
import solar from "../../../assets/video/solar.mp4";
import { Subtitle } from "../../../components";
import "../ourVision.css";

const CreateMarket = () => {
  return (
    <>
      {/* For Large Screen */}
      <div className="vapor_vision_section_container">
        <div style={{ display: "flex", width: "100%" }}>
          <div className="vapor_vision_section_video_left"></div>
          <div className="vapor_vision_section_video_right">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="vapor_vision_section_video"
              src={solar}
            />
          </div>
        </div>

        <div className="vapor_vision_section_content">
          <div className="vapor__vision_section_header-content">
            <h4 className="numbering"> --- 02</h4>
            <Subtitle className="">
              Anybody can create <br /> a market
            </Subtitle>
            <div className="vision-paragraph-container">
              <p className="vision-paragraph">
                Think /subreddit but investable.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* For Medium & Small Screen */}
      <div className="vapor_vision_section_container-tab">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="vapor_vision_section_video-tab"
          src={solar}
        />
        <div className="vapor_vision_section_content-tab">
          <div className="vapor__vision_section_header-content">
            <h4 className="numbering"> --- 02</h4>
            <Subtitle className="">
              Anybody can create <br /> a market
            </Subtitle>
            <div className="vision-paragraph-container">
              <p className="vision-paragraph">
                Think /subreddit but investable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMarket;
