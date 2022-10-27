import "./components.css";
import linkedin from "../svg/linkedin.svg";
import github from "../svg/github.svg";

const Card = () => {
  const logo = require("../avatars/python.png");
  const program = require("../svg/javascript.png");

  return (
    <div className="card">
      <div className="card-corners top">
        <p>Z</p>
        <img src={program} alt="javascript logo" />
      </div>
      <div className="card-info">
        <img className="user-logo" src={logo} alt="yo" />
        <h2 className="name">Zibi</h2>
        <p>
          Front End Developer
          <span>
            <b>Language:</b> JavaScript
          </span>
        </p>
        <div className="socials">
          <a href="#/">
            <img src={linkedin} alt="linkedin link" />
          </a>
          <a href="#/">
            <img src={github} alt="github link" />
          </a>
        </div>
      </div>
      <div className="card-corners bottom">
        <img src={program} alt="javascript logo" />
        <p>Z</p>
      </div>
    </div>
  );
};

export default Card;
