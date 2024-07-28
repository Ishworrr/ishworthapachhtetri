import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Colloboration";
// import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
