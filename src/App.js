import React from "react";
import Navbar from "./school/navbar";
import Introsection from "./school/introsection";
import Aboutsection from "./school/aboutsection";
import Servicessection from "./school/servicesection";
import PortfolioSection from "./school/portfolio";
import Teamsection from "./school/teamsection";
import Contactsection from "./school/contactsection";
import BottomWidgetsection from "./school/bottomwidgetsection";
import Footer from "./school/footersection";




const App = () => {
  return (
    <div>
      <Navbar />
      <Introsection />
      <Aboutsection />
      <Servicessection />
      <PortfolioSection />
      <Teamsection />
      <Contactsection />
      <BottomWidgetsection />
      <Footer />
    </div>
  );
};

export default App;