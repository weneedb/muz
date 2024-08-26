import React from "react";

import Logo from "../data/Logo";
import Search from "../data/Search";

const Header = () => {
  return (
    <header id="header" role="banner">
      <Logo />
      <Search />
    </header>
  );
};

export default Header;
