import React from "react";
import Tab from "../Components/Tab/Tab";
import foto from "../Assets/rifki.jpeg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/Theme";
import Button from "../Components/ButtonTheme/Button";

export default function Portfolio() {
  const theme = useTheme();
  //   const { theme, setDarkMode, setLightMode } = ThemeContext;

  const medsos = {
    github: "https://github.com/Rfkinrikhwan",
    facebook: "https://www.facebook.com/rifki.ikhwan.3",
    instagram: "https://www.instagram.com/rfkinrikhwan_/",
    linkedin: "https://www.linkedin.com/in/rfkinrikhwan/",
  };

  console.log(theme.theme);

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
                <Link href={medsos.facebook} target="_blank">
                  <FaFacebook className={`icons ${theme.theme}`} />
                </Link>
              </span>
              <span>
                <Link href={medsos.github} target="_blank">
                  <FaGithub className={`icons ${theme.theme}`} />
                </Link>
              </span>
              <span>
                <Link href={medsos.instagram} target="_blank">
                  <FaInstagram className={`icons ${theme.theme}`} />
                </Link>
              </span>
              <span>
                <Link href={medsos.linkedin} target="_blank">
                  <FaLinkedinIn className={`icons ${theme.theme}`} />
                </Link>
              </span>
            </div>

            <div className="description">
              <div className="decs-group">
                <h3>-1</h3>
                <p className="text">Years Of Work</p>
              </div>
              <div className="decs-group">
                <h3>1</h3>
                <p className="text">Completed projects</p>
              </div>
              <div className="decs-group">
                <h3>0</h3>
                <p className="text">Satisfied Customers</p>
              </div>
            </div>

            <div className="btn">
              <div className="btn_small">
                <Link href={`#`} className="wa">
                  <FaWhatsapp />
                </Link>
                <Link href={`#`} className="tele">
                  <FaTelegramPlane />
                </Link>
              </div>
              <Link href={`#`} className="portfolio">
                Cooming Soon
              </Link>
            </div>
            <Tab />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
