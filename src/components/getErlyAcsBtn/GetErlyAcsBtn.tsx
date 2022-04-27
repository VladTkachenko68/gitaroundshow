import React from "react";
import { motion } from "framer-motion";
import Modal from "../modal/Modal";
import "./getErlyAcsBtn.css";
import { hoverTxtBoxShadow } from "../../utils/Animations";

const GetErlyAcsBtn = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <motion.button
        onClick={() => {
          setShowModal(!showModal);
        }}
        whileHover={hoverTxtBoxShadow}
        className="big-button"
      >
        Get Early Access
      </motion.button>
    </>
  );
};

export default GetErlyAcsBtn;
