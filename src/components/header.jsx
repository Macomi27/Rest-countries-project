import React from "react";
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h3>Where in the world?</h3>
        <div className="theme-mode">
            {/* <div className="moonlight"><img src={} alt="" /></div> */}
            <p>dark mode</p>
        </div>
      </div>
    </header>
  );
}
export default Header;