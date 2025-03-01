import React from "react";

import { menuBar } from "../data/data";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  return (
    <nav className="menuBar">
      <ul className="menu">
        {menuBar.map((menu, key) => (
          <li
            key={key}
            className={location.pathname === menu.src ? "active" : ""}
          >
            <Link to={menu.src}>
              {menu.icon}
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
