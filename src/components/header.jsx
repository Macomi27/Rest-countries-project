import React from "react";
import './header.css'
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h3>Where in the world?</h3>
        <div className="theme-mode">
            <FaMoon className="moon-icon" />
            <p>dark mode</p>
        </div>
      </div>
    </header>
  );
}
export default Header;