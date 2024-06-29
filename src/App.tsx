import React from "react";
import {
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews"; // Correct import for Reviews component
import "./App.css";
import "@fontsource/poppins"; // Import the Poppins font
import Footer from "./components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
