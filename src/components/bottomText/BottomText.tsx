import React from "react";
import { Link } from "react-router-dom";
import "./bottomText.css";
import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import { motion } from "framer-motion";
import GetErlyAcsBtn from "../getErlyAcsBtn/GetErlyAcsBtn";
import { hoverTxtShadow } from "../../utils/Animations";

const BottomText = ({ ourVisionPg }: any) => {
  return (
    <>
      <div style={ourVisionPg ? { marginTop: "50px" } : { marginTop: "120px" }}>
        <Title>Invest in what you believe in</Title>
        <Subtitle>
          We’re building a system that rewards people committed to building the
          future.
        </Subtitle>
        <div>
          <div className="bottom-text-container">
            <div className="vapor__header-content__input ">
              <GetErlyAcsBtn />
            </div>
            <div className="bottom-text-link">
              {ourVisionPg ? (
                <Link to="/">
                  <motion.p whileHover={hoverTxtShadow}>How it works</motion.p>
                </Link>
              ) : (
                <Link to="/our-vision">
                  <motion.p whileHover={hoverTxtShadow}>Our Vision</motion.p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomText;
