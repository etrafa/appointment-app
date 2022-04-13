//components
import Navbar from "../navbar/Navbar";
import WhyUse from "./WhyUse";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

//hooks
import { NavContext } from "../../context/NavContext";
import { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <NavContext.Provider value={{ showNav, setShowNav }}>
        <Navbar />
        <Banner />
      </NavContext.Provider>
      <WhyUse />
      <Footer />
    </div>
  );
};

export default HomePage;
