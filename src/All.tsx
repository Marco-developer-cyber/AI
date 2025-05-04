import "./App.css";
import Cards from "./Components/cards";
import CyberFooter from "./Components/footer";
// import TechGalaxy from "./Components/map";
import CyberCarousel from "./Components/scrollBar";
import CyberStats from "./Components/stats";
import TechGrid from "./Components/teachGrid";
import TimeLine from "./Components/timeLine";
function All() {
  return (
    <>
      <CyberCarousel />
      <Cards />
      <CyberStats />
      {/* <TechGalaxy/> */}
      <TimeLine/>
      <TechGrid/>
      <CyberFooter />
    </>
  );
}

export default All;
