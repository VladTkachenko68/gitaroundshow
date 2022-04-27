import React from "react";
import galaxy from "../../../assets/video/galaxy.mp4";
import { Subtitle } from "../../../components";
import "../ourVisionSmallScreen.css";

const Community = () => {
  return (
    <>
      {/* For Large Screen */}
      <div className="vapor_vision_section_container2">
        <div style={{ display: "flex", width: "100%" }}>
          <div className="vapor_vision_section_video_left2">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="vapor_vision_section_video"
              src={galaxy}
            />
          </div>
          <div className="vapor_vision_section_video_right2"></div>
        </div>
        <div className="vapor_vision_section_content">
          <div className="vapor__vision_section_header-content">
            <h4 className="numbering"> --- 01</h4>
            <Subtitle className="">
              A community for <br /> communities
            </Subtitle>
            <div className="vision-paragraph-container">
              <p className="vision-paragraph">
                Our system unites markets, projects
              </p>
              <p className="vision-paragraph">
                and investors, truly aligning incentives.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* For Medium & Small Screen */}
      <div className="vapor_vision_section_container-tab-1">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="vapor_vision_section_video-tab"
          src={galaxy}
        />
        <div className="vapor_vision_section_content-tab">
          <div className="vapor__vision_section_header-content">
            <h4 className="numbering"> --- 01</h4>
            <Subtitle className="">
              A community for <br /> communities
            </Subtitle>
            <div className="vision-paragraph-container">
              <p className="vision-paragraph">
                Our system unites markets, projects
              </p>
              <p className="vision-paragraph">
                and investors, truly aligning incentives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
