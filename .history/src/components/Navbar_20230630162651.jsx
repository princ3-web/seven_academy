import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import logo from "../assets/icons/logo.png";
import glass from "../assets/icons/glass.png";
import cart from "../assets/icons/cart.png";
import language from "../assets/icons/language.png";

const Navbar = () => {
  const navbarIcons = [
    { name: "Home", link: "/", icon: logo },
    { name: "glass", link: "/", icon: glass },
    { name: "cart", link: "/", icon: cart },
    { name: "language", link: "/", icon: language },
  ];
  const navbarItems = [
    { name: "Categories", link: "/Categories" },
    { name: "Business", link: "/Business" },
    { name: "Teach", link: "/Teach" },
  ];

  const buttons = [
    { name: "Log in", link: "/" },
    { name: "Sign up", link: "/" },
  ];
  return (
    <div className={navbarStyles.navbar}>
      <img className={navbarStyles.icon} src={navbarIcons[0].icon} alt="" />
      <div className={navbarStyles.item}>{navbarItems[0].name}</div>
      <div className={navbarStyles.searchBar}></div>
      <div className={navbarStyles.item}>{navbarItems[1].name}</div>
      <div className={navbarStyles.item}>{navbarItems[2].name}</div>
      
      <div className={navbarStyles.buttons}>
        <div className={navbarStyles.button}>{buttons[0].name}</div>
        <div className={navbarStyles.button}>{buttons[1].name}</div>
        <div className={navbarStyles.button}>
          <img className={navbarStyles.icon} style={{ width: "2rem" }} src={navbarIcons[3].icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;