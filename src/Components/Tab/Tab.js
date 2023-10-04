import React, { useState } from "react";
import thumbnail1 from "../../Assets/portfolio.png";
import thumbnail2 from "../../Assets/alquranvue.png";
import thumbnail3 from "../../Assets/NewsApp.png";
import "./Tab.css";
import { FaLink } from "react-icons/fa";
import { useTheme } from "../../Context/Theme";
import Tech from "../../Data/Tech.json";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(1);
  const theme = useTheme();
  const tech = Tech.data

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const project = [
    {
      id: 1,
      thumbnail: thumbnail1,
      description:
        "This page is my portfolio website, which I will keep updating",
      title: "Portfolio",
      link: "/",
    },
    {
      id: 2,
      thumbnail: thumbnail2,
      description:
        "I created this project using the vue js framework and boostrap",
      title: "Al-Quran",
      link: "https://simple-quran.vercel.app/menu",
    },
    {
      id: 3,
      thumbnail: thumbnail3,
      description:
        "Hi guys, this is a website that displays news from various channels",
      title: "Chrono Press",
      link: "https://chorono-press.vercel.app/",
    },
  ];

  return (
    <div>
      <div className="tabs">
        <span
          className={activeTab === 1 ? "active span" : "span"}
          onClick={() => handleTabClick(1)}>
          Project
        </span>
        <span
          className={activeTab === 2 ? "active span" : "span"}
          onClick={() => handleTabClick(2)}>
          Tech
        </span>
        <span
          className={activeTab === 3 ? "active span" : "span"}
          onClick={() => handleTabClick(3)}>
          About Me
        </span>
      </div>

      <div className="tab_content">
        {activeTab === 1 && (
          <div className="project">
            {project.map((data) => (
              <div
                className="thumbnail"
                key={data.id}
                style={{ backgroundImage: `url(${data.thumbnail})` }}>
                <div className="popUp">
                  <span className="description">{data.description}</span>
                  <h3 className="title">{data.title}</h3>
                  <a
                    href={data.link}
                    className="link"
                    target="_blank"
                    rel="noreferrer">
                    <FaLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div className="skills">
            <h3 className={`title ${theme.theme + "-title"}`}>Frontend Tech</h3>
            <div className="content">
              {tech.map((data) => (
                <div className={`one ${theme.theme + "-one"}`} key={data.id}>
                    <img src={data.img} alt="Tech Stack" className="tech-img"/>
                  <div className="subOne">
                    <span className="language">{data.tech}</span>
                    <span className="skil">{data.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="aboutMe">
            <h3 className={`title ${theme.theme + "-me"}`}>My Story</h3>
            <p className="story">
              .....
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
