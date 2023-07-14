import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { TextField, Box, Hidden } from "@mui/material";
import { grey } from "@mui/material/colors";
import MobileDrawer from "./MobileDrawer";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <Box className={navbarStyles.navbar} px={4}>
      <MobileDrawer />
      <Link to={"/signup"}></Link>
      <IconButton>
        <SchoolOutlinedIcon />
      </IconButton>
      <Hidden lgDown>
        <Button variant="text" sx={{ color: grey[900], textTransform: "none", mr: 1 }}>
          Categories
        </Button>
      </Hidden>
      <Hidden lgDown>
        <TextField
          id="standard-basic"
          label="Search for anything"
          variant="filled"
          sx={{ width: "400px" }}
        />
      </Hidden>
      <Hidden lgDown>
        <Button variant="text" sx={{ color: grey[900], textTransform: "none", mr: 1 }}>
          Business
        </Button>
        <Button variant="text" sx={{ color: grey[900], textTransform: "none", mr: 1 }}>
          Teach
        </Button>
      </Hidden>
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
      <Hidden lgDown>
        <div className={navbarStyles.buttons}>
          <Button
            variant="contained"
            sx={{ backgroundColor: grey[900], textTransform: "none", mr: 1 }}
          >
            Log in
          </Button>
          <Link to={"/signup"}>
          <Button
            variant="outlined"
            sx={{ backgroundColor: grey[50], textTransform: "none", color: grey[900], mr: 1 }}
          >
            Sign up
          </Button>
          </Link>
          <IconButton>
            <PublicOutlinedIcon />
          </IconButton>
        </div>
      </Hidden>
    </Box>
  );
};

export default Navbar;
