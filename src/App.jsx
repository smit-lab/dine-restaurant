import "./App.css";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HighlightMenu from "./components/HighlightMenu/HighlightMenu";
import Reservation from "./components/Reservation/Reservation";
import Slider from "./components/Slider/Slider";
function App() {
  return (
    <div className="leagueSpartan">
      <Hero />
      <Feature />
      <HighlightMenu />
      <Reservation />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
