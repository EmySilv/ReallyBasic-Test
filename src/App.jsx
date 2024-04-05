import React from "react";
import "./global/global.style.css";
import Header from "./components/Header/Header";
import Slide from "./components/Container/Slide/Slide";
import Box from "./components/Container/Box/Box";
import Foter from "./components/Foter/Foter";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <>
      <Header />
      
      <Slide />
      <Box />

      <Foter />
    </>
  );
}

export default App;
