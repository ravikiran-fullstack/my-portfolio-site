import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="headerDesktop">
      <ul>
        <li className="profileLogo">
          <a className="text-uppercase" href="#home">
            Ravikiran
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="contactsTab">
          <a href="#contacts">Contact Me</a>
        </li>
        <li className="contactsTab">
          <a href="#resume">Resume</a>
        </li>
        {/* <li>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </li> */}

        <li>
          <label className="switch">
            <input
              type="checkbox"
              name="darkMode"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </li>
      </ul>
    </header>
  );
};

export default Header;
