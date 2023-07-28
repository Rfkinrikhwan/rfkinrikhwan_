import React, { useState } from "react";
import Tab from "../Components/Tab/Tab";
import foto from "../Assets/profile.jpg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { useTheme } from "../Context/Theme";
import Button from "../Components/ButtonTheme/Button";
import Popup from "../Components/PopUp/Popup";

export default function Portfolio() {
  const [popUp, setPopUp] = useState(false);
  const theme = useTheme();

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const medsos = {
    github: "https://github.com/Rfkinrikhwan",
    facebook: "https://www.facebook.com/rifki.ikhwan.3",
    instagram: "https://www.instagram.com/rfkinrikhwan_/",
    linkedin: "https://www.linkedin.com/in/rfkinrikhwan/",
  };

  const handleThemeChange = () => {
    setTimeout(() => {
      if (theme.theme === "light") {
        theme.setDarkMode();
      } else {
        theme.setLightMode();
      }
    }, 500);
  };

  return (
    <div className={`container ${theme.theme}`}>
      <div className="wrap">
        <div className="top">
          <div className="profile">
            <div className={`foto ${theme.theme}`}>
              <img src={foto} className="img" alt="hallodek"></img>
            </div>

            <span className="name">Rifki Nur Ikhwan</span>
            <span className="info">Frontend Web Developer</span>

            <div className="icon">
              <span>
                <a href={medsos.facebook}>
                  <FaFacebook className={`icons ${theme.theme}`} />
                </a>
              </span>
              <span>
                <a href={medsos.github}>
                  <FaGithub className={`icons ${theme.theme}`} />
                </a>
              </span>
              <span>
                <a href={medsos.instagram}>
                  <FaInstagram className={`icons ${theme.theme}`} />
                </a>
              </span>
              <span>
                <a href={medsos.linkedin}>
                  <FaLinkedinIn className={`icons ${theme.theme}`} />
                </a>
              </span>
            </div>

            <div className="description">
              <div className="decs-group">
                <h3>-1</h3>
                <p className="text">Years Of Work</p>
              </div>
              <div className="decs-group">
                <h3>2</h3>
                <p className="text">Completed projects</p>
              </div>
              <div className="decs-group">
                <h3>0</h3>
                <p className="text">Satisfied Customers</p>
              </div>
            </div>

            <div className="btn">
              <div className="btn_small">
                <button href={`#`} className="wa">
                  <FaWhatsapp />
                </button>
                <button href={`#`} className="tele" onClick={() => setPopUp(true)}>
                  <FaTelegramPlane />
                </button>
              </div>
              <button href={`#`} className="portfolio">
                Coming Soon
              </button>
            </div>
            <Tab />
            <Button onClick={handleThemeChange} />
            <Popup value={popUp} onClose={togglePopUp} />
          </div>
        </div>
      </div>
    </div>
  );
}
