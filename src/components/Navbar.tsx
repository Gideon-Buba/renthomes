import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About Us", "Services", "Reviews", "Contact Us"].map(
          (text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

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
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            <NavbarLink>Home</NavbarLink>
            <NavbarLink>About Us</NavbarLink>
            <NavbarLink>Services</NavbarLink>
            <NavbarLink>Reviews</NavbarLink>
            <NavbarLink>Contact Us</NavbarLink>
          </Box>
        )}
      </Toolbar>
    </Box>
  );
};

export default Navbar;
