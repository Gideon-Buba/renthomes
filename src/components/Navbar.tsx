import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/material/styles";

const NavbarLink = styled(Button)(({ theme }) => ({
  color: "#475C46",
  textTransform: "none",
  position: "relative",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "0",
    left: "0",
    backgroundColor: "#475C46",
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%",
  },
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, borderBottom: "1px solid #ccc" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            color: "#475C46",
          }}
        >
          <span style={{ fontWeight: "bold" }}>RENT</span>
          HOMES
          <HomeIcon sx={{ ml: 1 }} />
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <NavbarLink>Home</NavbarLink>
          <NavbarLink>About Us</NavbarLink>
          <NavbarLink>Services</NavbarLink>
          <NavbarLink>Reviews</NavbarLink>
          <NavbarLink>Contact Us</NavbarLink>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
