import "./intro.css";
import Me from "../../img/me.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Intro = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className={theme.state.darkMode ? "i-name-white" : "i-name"}>
            Yassine Trabelsi
          </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>
          <p className={theme.state.darkMode ? "i-desc-white" : "i-desc"}>
            I'm a software engineer student at the university of technology
            <a
              href="https://esprit.tn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b> ESPRIT</b>
            </a>
            , i design and develop modern software and web applications.
          </p>

          <div className="i-iconSet">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/yassine-trabelsi-639b0a195/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Yass525"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://docdro.id/RDva6HD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yassiine_trabelsii/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke={theme.state.darkMode ? "white" : "black"}
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
