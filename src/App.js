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
import { Helmet } from "react-helmet";
import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <Helmet defaultTitle="LifeHack 2021">
        <meta
          name="description"
          content="LifeHack 2021 is a 24-Hour virtual hackathon that wants you to develop
          innovative software solutions to make a positive change in peoples’
          lives in a post-COVID world. Through exciting workshops and events,
          you will have the chance to learn various technologies from web
          development to utilizing cloud services."
        />
        <meta
          name="keywords"
          content="lifehack, hackathon, 2021, nus, computing, club"
        />
      </Helmet>
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
