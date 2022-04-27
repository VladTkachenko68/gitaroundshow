import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import ScrollToTop from "./components/scrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <motion.div initial="hidden" animate="show" className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </motion.div>
    </>
  );
}

export default App;
