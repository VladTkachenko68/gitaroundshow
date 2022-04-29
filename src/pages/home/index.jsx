import React from "react";
import Hero from "../../components/hero/Hero";
import { useLocation } from "react-router-dom";
import Container from "../../components/container/Container";
import "./home.css";
// import Marketplace from "../../layout/home/marketplace/marketplace";
// import Token from "../../layout/home/token/token";
// import Roadmap from "../../layout/home/roadmap/roadmap";

const Home = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/" && location.hash === "") {
      window.scrollTo(0, 0);
    }
  });

  return (
    <Container style={{ marginTop: 80 }}>
      <Hero />
    </Container>  
  );
};

export default Home;
