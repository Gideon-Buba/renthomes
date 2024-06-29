import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // make sure to import the Hero component
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </Container>
  );
}

export default App;
