import React from "react";
import "./App.css";
import BACKGROUND from "./assets/pattern_ReallyBasic.svg";
import Header from "./components/Header/Header";
import Slide from "./components/Container/Slide/Slide";
import Foter from "./components/Foter/Foter";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <>
      {/* <img src={BACKGROUND} alt="" /> */}
      <Header/>
      <Slide/>
      <Foter />
    </>
  );
}

export default App;
