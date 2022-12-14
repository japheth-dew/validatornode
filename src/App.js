import { useEffect } from "react";
import Footer from "./components/Body/Footer";
import Landing from "./components/Body/Landing/Landing";
import Showcase from "./components/Body/Showcase/Showcase";
import Header from "./components/Header/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import LandingContainer from "./components/Body/Landing/LandingContainer";
import Tablet from "./components/Body/Tablet";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="relative">
      <Header />
      <LandingContainer>
        <Landing />
      </LandingContainer>

      <div data-aos="fade-up">
        <Showcase />
      </div>
      <Tablet />

      <Footer />
    </div>
  );
};

export default App;
