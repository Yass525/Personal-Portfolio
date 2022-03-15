import "./about.css";
import Me from "../../img/me2.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Skills</h1>
        <p className="a-sub">
        Some of the significant aptitudes which will assist me with achieving your objectives.
        </p>
        <div className="a-desc">
          <ul className="a-skill">
          <li>HTML-CSS-JavaScript</li>
          <li>nodejs-express</li>
          <li>MySQL-MongoDB</li>
          <li>Java/Spring</li>
          <li>R</li>
          </ul>
          <ul className="a-skill">
          <li>Algorithms</li>
          <li>PHP-Symfony</li>
          <li>ReactJS-Redux</li>
          <li>Python-Django</li>
          <li>Angular</li>
          </ul>
        </div>
        {/* <div className="a-award">
          <img src="" alt="we can put image here" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">title image</h4>
            <p className="a-award-desc">
              text image
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
