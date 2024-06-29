import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import homeImage from "../assets/home-image.png"; // replace with your actual image path

const Hero = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "50px 0", height: "100vh" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: "#475C46", fontWeight: "bold", mb: 2 }}
          >
            Your Rental Journey Begins Here
          </Typography>
          <Typography variant="h6" sx={{ color: "#141E15", mb: 4 }}>
            We Make Finding Rentals Easy, Effortless Search, Endless Choices
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#475C46",
                borderRadius: 50,
                ":hover": {
                  bgcolor: "white",
                  color: "#475C46",
                },
              }}
            >
              Rent Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#475C46",
                color: "#475C46",
                borderRadius: 50,
                ":hover": {
                  color: "white",
                  bgcolor: "#475C46",
                  borderColor: "#475C46",
                },
              }}
            >
              Rent Your Place
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={homeImage}
            alt="Home"
            sx={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
