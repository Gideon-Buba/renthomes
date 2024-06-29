import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CheckCircle, LocalFlorist, Lock } from "@mui/icons-material";

const services = [
  {
    icon: <CheckCircle style={{ fontSize: 50, color: "white" }} />,
    title: "RESPONSIVE",
    description:
      "Our commitment to being responsive means that your concerns are addressed efficiently.",
  },
  {
    icon: <LocalFlorist style={{ fontSize: 50, color: "white" }} />,
    title: "GREEN",
    description:
      "Experience the convenience of our responsive platform, ensuring swift communication.",
  },
  {
    icon: <Lock style={{ fontSize: 50, color: "white" }} />,
    title: "SECURITY",
    description:
      "Ensuring swift communication and quick solutions for all your rental needs.",
  },
];

function Services() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "#475C46", fontWeight: "bold", mb: 2 }}
      >
        See Our Services
      </Typography>
      <Typography variant="h6" sx={{ color: "#141E15", mb: 4 }}>
        We Make Finding Rentals Easy, Effortless Search, Endless Choices
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={1}
              sx={{
                p: 4,
                textAlign: "center",
                backgroundColor: "#0D4512E5",
                borderRadius: 8,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "250px", // Ensures all cards are at least 250px tall
              }}
            >
              {service.icon}
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "44px",
                  fontWeight: 700,
                  lineHeight: "66px",
                  textAlign: "center",
                  mt: 2,
                  mb: 1,
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "30px",
                  textAlign: "center",
                }}
              >
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
