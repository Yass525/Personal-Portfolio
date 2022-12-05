import "./about.css";
import Mind from "../../img/mind.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">

        <img src={Mind} alt="" className="a-img" />
      </div>
      <div className="a-right">
        <h1 className="a-title">Skills</h1>
        <p className="a-sub">
          Some of the significant aptitudes which will assist me with achieving
          your objectives.
        </p>
        <div className="a-desc2">
          <ul className="a-titles">
            <b>PROGRAMMING LANGUAGES</b>
            <b>RUNTIME ENVIRONMENT</b>
            <b>FRAMEWORKS & LIBRARIES</b>
            <b>RESOURCE MANAGEMENT </b>
            <b>SOURCE CONTROL </b>
            <b>OTHER </b>
          </ul>
          <div className="a-right">
            <ul className="a-skill2">
              <li>Python </li>
              <li>JavaScrip</li>
              <li>C++</li>
              <li>Java</li>
            </ul>
            <ul className="a-skill2">
              <li>Node JS</li>
            </ul>
            <ul className="a-skill2">
              <li>NextJS </li>
              <li>ReactJS/Redux</li>
              <li>Angular</li>
              <li>Spring</li>
              <li>Symfony 4 </li>
              <li>Express JS</li>
              <li>Electron JS</li>
            </ul>
            <ul className="a-skill2">
              <li>MySQL </li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
            <ul className="a-skill2">
              <li>GIT</li>
            </ul>
            <ul className="a-skill2">
              <li>Microsoft Azure</li>
              <li>Microsevices </li>
              <li>Socket.io</li>
              <li>REST</li>
              <li>Jira</li>
              <li>Trello</li>
            </ul>
          </div>
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
