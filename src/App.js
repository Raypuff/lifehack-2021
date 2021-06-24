import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import HackTimeline from "./components/Timeline";
import Workshops from "./components/Workshops";
import Prizes from "./components/Prizes";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Footer from "./components/Footer";
import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Main />
        <About />
        <HackTimeline />
        <Workshops />
        <Prizes />
        <FAQ />
        <Sponsors />
        <Register />
      </div>
      <Footer />
    </div>
  );
};

export default App;
