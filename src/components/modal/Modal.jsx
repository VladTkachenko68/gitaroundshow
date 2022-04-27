import React, { useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./modal.css";
import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { hoverTxtBoxShadow } from "../../utils/Animations";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={modalRef}
          onClick={closeModal}
        >
          <motion.div variants={modal} className="modal">
            <div
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="cross-icon-modal"
            >
              <RiCloseLine style={{ fontSize: "18px", cursor: "pointer" }} />
            </div>
            <div className="modal-title">Join the vaporVERSE</div>
            <div className="modal-subtitle">
              Follow us on Twitter and join our Discord to get 15 free TEA token
              and get exclusive access to our platform and NFT mint.
            </div>
            <div className="modal-items-box">
              <a
                href="https://discord.com/invite/sjBjnQkEYP"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  className="modal-item-box"
                  whileHover={hoverTxtBoxShadow}
                >
                  <span className="modal-item-box-link-name">
                    <SiDiscord className="modal-item-box-link-icon" />
                    Discord
                  </span>
                  <span className="modal-item-box-link-numbering">Step1</span>
                </motion.div>
              </a>
              <a
                href="https://twitter.com/vapor_Labs"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  className="modal-item-box"
                  style={{ margin: "8px 0 20px 0" }}
                  whileHover={hoverTxtBoxShadow}
                >
                  <span className="modal-item-box-link-name">
                    <BsTwitter className="modal-item-box-link-icon" />
                    Twitter
                  </span>
                  <span className="modal-item-box-link-numbering">Step2</span>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
