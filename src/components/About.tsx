import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import aboutImage from "../assets/about-image.png"; // replace with your actual image path

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "50px 0" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} sx={{ mb: { xs: 4, md: 0 } }}>
          <Box
            component="img"
            src={aboutImage}
            alt="Home"
            sx={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: "#475C46", fontWeight: "bold", mb: 2 }}
          >
            Begin your awesome journey
          </Typography>
          <Typography variant="h6" sx={{ color: "#141E15", mb: 4 }}>
            Looking for the perfect home to rent? Our user-friendly house rental
            website makes your search a breeze. Browse through a diverse range
            of listings, from cozy apartments to spacious family houses. With
            detailed descriptions, vivid photos, and handy filters, finding your
            ideal rental is just a click away.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#475C46",
                borderRadius: 50,
                ":hover": {
                  bgcolor: "white",
                  color: "#475C46",
                },
              }}
            >
              Continue
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
