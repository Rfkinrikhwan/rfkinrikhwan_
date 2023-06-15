import React, { useState } from "react";
import thubmnail1 from "../../Assets/portfolio.png";
import thubmnail2 from "../../Assets/alquranvue.png";
import "./Tab.css";
import { FaLink, FaCheckCircle } from "react-icons/fa";
import { useTheme } from "../../Context/Theme";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(1);
  const theme = useTheme();

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const project = [
    {
      id: 1,
      thumbnail: thubmnail1,
      description:
        "This page is my portfolio website, which I will keep updating",
      title: "Portfolio",
      link: "/",
    },

    {
      id: 2,
      thumbnail: thubmnail2,
      description:
        "I created this project using the vue js framework and boostrap",
      title: "Al-Quran",
      link: "https://simple-quran.vercel.app/menu",
    },
  ];

  return (
    <div>
      <div className="tabs">
        <span
          className={activeTab === 1 ? "active span" : "span"}
          onClick={() => handleTabClick(1)}
        >
          Project
        </span>
        <span
          className={activeTab === 2 ? "active span" : "span"}
          onClick={() => handleTabClick(2)}
        >
          Skills
        </span>
        <span
          className={activeTab === 3 ? "active span" : "span"}
          onClick={() => handleTabClick(3)}
        >
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
                style={{ backgroundImage: `url(${data.thumbnail})` }}
              >
                <div className="popUp">
                  <span className="description">{data.description}</span>
                  <h3 className="title">{data.title}</h3>
                  <a
                    href={data.link}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div className="skills">
            <h3 className={`title ${theme.theme+'-title'}`}>Frontend Developer</h3>
            <div className="content">
              <div className="one">
                <FaCheckCircle style={{ color: "#42a5f5" }} />
                <div className="subOne">
                  <span className="language">HTML & CSS</span>
                  <span className="skil">EXPERT</span>
                </div>
              </div>

              <div className="one">
                <FaCheckCircle style={{ color: "#42a5f5" }} />
                <div className="subOne">
                  <span className="language">JAVASCRIPT</span>
                  <span className="skil">MEDIUM</span>
                </div>
              </div>

              <div className="one">
                <FaCheckCircle style={{ color: "#42a5f5" }} />
                <div className="subOne">
                  <span className="language">VUE JS</span>
                  <span className="skil">MEDIUM</span>
                </div>
              </div>

              <div className="one">
                <FaCheckCircle style={{ color: "#42a5f5" }} />
                <div className="subOne">
                  <span className="language">REACT JS</span>
                  <span className="skil">BEGINNER</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="aboutMe">
            <h3 className={`title ${theme.theme+'-me'}`}>My Story</h3>
            <p className="story">
              hey guys my journey started when i was about to enter middle
              school. At first I didn't want to be a programmer, and I didn't
              know what a programmer was. Previously my dream was to become an
              architect who would design houses. as time goes by I keep thinking
              am I taking the wrong major? and I live my day as a person who
              doesn't care about the future. And all that changed when I did an
              internship at a PT in my city, this is where my love for
              programming started, and until now I have found my direction in
              life. I also feel that my personality is not like what I used to
              know, now I can be more confident because I always meet lots of
              people. In fact, it's not only that I'm always alone, but because
              I'm not perfect because I have a disability. ok guys thanks for
              reading my story byee..
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
