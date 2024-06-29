import React from "react";
import { Box, Typography, Paper, Avatar, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import local images
import davidImage from "../assets/david.png";
import alexImage from "../assets/alex.png";
import ryanImage from "../assets/ryan.png";

const reviews = [
  {
    name: "David Anderson",
    text: "I loved the experience, renting a home was a pleasure. From the communication was seamless and professional.",
    avatar: davidImage, // Reference to local image
  },
  {
    name: "Alex Mitchell",
    text: "It was an Amazing Experience, the attention to detail, personalized approach made the entire process stress-free.",
    avatar: alexImage, // Reference to local image
  },
  {
    name: "Ryan Bennett",
    text: "Our experience was so good with renting services exceeded all expectations. Demonstrated a deep understanding.",
    avatar: ryanImage, // Reference to local image
  },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "350px",
  height: "350px",
  borderRadius: "30px 134px 30px 134px",
  border: "8px solid #26582A",
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#F5F5F5",
  margin: "20px auto",
}));

const Reviews = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4, height: "100vh" }}>
      <Typography
        variant="h3"
        sx={{ color: "#475C46", fontWeight: "bold", mb: 2 }}
      >
        What Customers Say About Our Services
      </Typography>
      <Typography variant="h6" sx={{ color: "#141E15", mb: 4 }}>
        We Make Finding Rentals Easy, Effortless Search, Endless Choices
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledPaper elevation={3}>
              <Avatar
                alt={review.name}
                src={review.avatar}
                sx={{ width: 120, height: 120, margin: "0 auto 20px" }} // Reduced size
              />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  textAlign: "center",
                  color: "#26582AE0", // Adjusted name color
                  mt: 2,
                  mb: 1,
                }}
              >
                {review.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  textAlign: "center",
                  color: "#475C46",
                }}
              >
                “{review.text}” {/* Added quotes around the text */}
              </Typography>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
