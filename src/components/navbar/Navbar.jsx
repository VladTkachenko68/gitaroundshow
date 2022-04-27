import React from "react";
import "./Navbar.css";
import Container from "../container/Container";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "../modal/Modal";
import logo_video from "../../assets/video/logo.mp4";
import { hoverTxtShadow } from "../../utils/Animations";

export const navRoutes = [
  { name: "NFT Marketplace", route: "#marketplace" },
  { name: "VXP Token", route: "#token" },
  { name: "Team", route: "#team" },
];

const Navbar = ({ showDropdown, setShowDropdown }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <nav
        style={{
          width: "100%",
          position: "fixed",
          // backgroundColor: "black",
          top: 0,
          zIndex: 10,
        }}
      >
        <Container>
          <div className="Navbar">
            <ul className="NavbarContainer">
              <div className="NavbarLeft">
                <div className="vapor__navbar-links_logo">
                  <Link to="/">
                    <motion.video
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={logo_video}
                      className="vapor_logo_video"
                    />
                  </Link>
                </div>
              </div>

              <div className="NavbarRight">
                {navRoutes.map((item) => (
                  <li key={item.name} className="NavLink">
                    <motion.p whileHover={hoverTxtShadow}>
                      <Link to={item.route}>{item.name}</Link>
                    </motion.p>
                  </li>
                ))}
              </div>
              <div
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
                className="NavbarMenuBtn"
              >
                <RiMenu3Line size={32} />
              </div>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
