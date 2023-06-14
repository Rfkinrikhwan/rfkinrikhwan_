import "./App.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import foto from "./Assets/rifki.jpeg";

import React from "react";
import Tab from "./Components/Tab/Tab";

export default function App() {
  const medsos = {
    github: "https://github.com/Rfkinrikhwan",
    facebook: "https://www.facebook.com/rifki.ikhwan.3",
    instagram: "https://www.instagram.com/rfkinrikhwan_/",
    linkedin: "https://www.linkedin.com/in/rfkinrikhwan/",
  };

  return (
    <div className="container">
      <div className="wrap">
        <div className="top">
          <div className="profile">
            <div className="foto">
              <img src={foto} className="img" alt="hallodek"></img>
            </div>

            <span className="name">Rifki Nur Ikhwan</span>
            <span className="info">Frontend Web Developer</span>

            <div className="icon">
              <span className="one">
                <a href={medsos.facebook} target="_blank" rel="noreferrer">
                  <FaFacebook className="icons" />
                </a>
              </span>
              <span className="icons two">
                <a href={medsos.github} target="_blank" rel="noreferrer">
                  <FaGithub className="icons" />
                </a>
              </span>
              <span className="icons three">
                <a href={medsos.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram className="icons" />
                </a>
              </span>
              <span className="icons four">
                <a href={medsos.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedinIn className="icons" />
                </a>
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
                <a href="#" className="wa" rel="noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="#" className="tele" rel="noreferrer">
                  <FaTelegramPlane />
                </a>
              </div>
              <a href="#" className="portfolio" rel="noreferrer">
                Cooming Soon
              </a>
            </div>
            <Tab />
          </div>
        </div>
      </div>
    </div>
  );
}
