import Header from "./components/Header";
import Main from "./components/Main";
import HackTimeline from "./components/Timeline";
import Workshops from "./components/Workshops";
import Prizes from "./components/Prizes";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Main id="main" />
      <HackTimeline id="timeline" />
      <Workshops id="workshops" />
      <Prizes id="prizes" />
      <FAQ />
      <Sponsors />
      <Register />
      <Footer />
    </div>
  );
};

export default App;
