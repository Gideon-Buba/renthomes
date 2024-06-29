import React from "react";
import { Box, Grid, Link, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box
      sx={{
        padding: "40px 0",
        color: "#555555",
        mt: 4,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} textAlign={"left"}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#475C46",
            }}
          >
            <span style={{ fontWeight: "bold" }}>RENT</span>HOMES
            <HomeIcon sx={{ ml: 1 }} />
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            The best and easiest way to rent homes.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} textAlign={"left"}>
          <Typography
            variant="h6"
            sx={{ color: "#475C46", mb: 1, fontWeight: "bold" }}
          >
            Useful links
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ display: "block", mb: 0.5 }}
          >
            About us
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ display: "block", mb: 0.5 }}
          >
            Events
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ display: "block", mb: 0.5 }}
          >
            Blogs
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ display: "block", mb: 0.5 }}
          >
            FAQ
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} textAlign={"left"}>
          <Typography
            variant="h6"
            sx={{ color: "#475C46", mb: 1, fontWeight: "bold" }}
          >
            Main Menu
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ display: "block", mb: 0.5 }}
          >
            Home
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ display: "block", mb: 0.5 }}
          >
            Offers
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ display: "block", mb: 0.5 }}
          >
            Menus
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ display: "block", mb: 0.5 }}
          >
            Reservation
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} textAlign={"left"}>
          <Typography
            variant="h6"
            sx={{ color: "#475C46", mb: 1, fontWeight: "bold" }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            example@email.com
          </Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            +64 958 248 966
          </Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Social media
          </Typography>
          <Box>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        sx={{ mt: 4, color: "#475C46", fontWeight: "bold" }}
      >
        Copyright © 2023 Dscode | All rights reserved
      </Typography>
      <Typography
        variant="body2"
        sx={{ mt: 1, color: "#475C46", fontWeight: "bold" }}
      >
        Designed by AmeniaSabuwala
      </Typography>
    </Box>
  );
}

export default Footer;
