import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Container>
      <Navbar />
      <Container>{/* Your other components go here */}</Container>
    </Container>
  );
}

export default App;
