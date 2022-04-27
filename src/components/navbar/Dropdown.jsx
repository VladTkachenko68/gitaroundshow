import React from "react";
import Container from "../container/Container";
import "./Dropdown.css";
import { navRoutes } from "./Navbar";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import logo_video from "../../assets/video/logo.mp4";
import { hoverTxtShadow } from "../../utils/Animations";

const DropDown = ({ showDropdown, setShowDropdown }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className={!showDropdown ? "dropDown2" : "dropDown"}>
        <Container>
          <div className="DropdownTop">
            <div className="DropdownTopItem">
              <motion.div
                whileHover={{
                  scale: 1.01,
                }}
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
                className="vapor__navbar-links_logo"
              >
                <Link to="/">
                  <motion.video  autoPlay loop muted playsInline src={logo_video} className="vapor_logo_video" />
                </Link>
              </motion.div>
            </div>
            <div
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
              className="DropdownTopItem"
            >
              <RiCloseLine size={35} />
            </div>
          </div>

          <ul className="DropdownLinksContainer">
            <div className="DropdownLinks">
              {navRoutes.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    setShowDropdown(!showDropdown);
                  }}
                  className="DropdownLink"
                >
                  <motion.p whileHover={hoverTxtShadow}>
                    <Link to={item.route}>{item.name}</Link>
                  </motion.p>
                </li>
              ))}
            </div>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default DropDown;
