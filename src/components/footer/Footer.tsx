import { motion } from "framer-motion";
import { SiDiscord } from "react-icons/si";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import Container from "../container/Container";
import "./footer.css";
import { hoverTxtShadow } from "../../utils/Animations";

const data = [
  {
    href: "https://discord.com/invite/vaporxp",
    name: "Discord",
    logo: <SiDiscord className="footerLink-icon" />,
  },
  {
    href: "https://twitter.com/vaporxp",
    name: "Twitter",
    logo: <FaTwitter className="footerLink-icon" />,
  },
  // {
  //   href: "https://medium.com/@vapor.finance",
  //   name: "Medium",
  //   logo: <BsMedium className="footerLink-icon" />,
  // },
  {
    href: "https://t.me/vaporxp",
    name: "Telegram",
    logo: <FaTelegramPlane className="footerLink-icon" />,
  },
];
const Footer = () => {
  return (
    <Container>
      <div className="footer_container">
        <div></div>
        <div className="footerLinks">
          {data.map((item, index) => (
            <motion.div
              whileHover={hoverTxtShadow}
              key={index}
              className="footerLink"
            >
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.logo}
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
