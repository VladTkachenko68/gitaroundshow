import React from "react";
import planet from "../../../assets/video/planet1.mp4";
import { Subtitle } from "../../../components";

const CreateProjects = () => {
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
              src={planet}
            />
          </div>
          <div className="vapor_vision_section_video_right2"></div>
        </div>
        <div className="vapor_vision_section_content">
          <div className="vapor__vision_section_header-content">
            <h4 className="numbering"> --- 03</h4>
            <Subtitle className="">
              Anybody can create <br /> a project
            </Subtitle>
            <div className="vision-paragraph-container">
              <p className="vision-paragraph">
                Fundraising and community building,
              </p>
              <p className="vision-paragraph"> without the hassle.</p>
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
          src={planet}
        />
        <div className="vapor_vision_section_content-tab">
          <div className="vapor__vision_section_header-content">
            <h4 className="numbering"> --- 03</h4>
            <Subtitle className="">
              Anybody can create <br /> a project
            </Subtitle>
            <div className="vision-paragraph-container">
              <p className="vision-paragraph">
                Fundraising and community building,
              </p>
              <p className="vision-paragraph"> without the hassle.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProjects;
