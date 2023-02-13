import React from 'react';
import linkedin from '../svg/linkedin.svg';
import github from '../svg/github.svg';
import './components.css';

const Card = ({ nickname, position, language, git, link }) => {
  const logo = require(`../logos/${nickname?.toLowerCase()}.png`);
  const program = require(`../svg/${language?.toLowerCase()}.png`);
  const initial = nickname?.slice(0, 1);
  return (
    <div className="card">
      <div className="card-corners top">
        <p>{initial}</p>
        <img
          src={program}
          alt="program logo"
        />
      </div>
      <div className="card-info">
        <img
          className="user-logo"
          src={logo}
          alt="logo"
        />
        <h2 className="name">{nickname}</h2>
        <p>
          {position}
          <br />
          <b>Language:</b> {language}
        </p>
        <div className="socials">
          <a
            href={link}
            target="_blank"
            rel="noreferrer">
            <img
              src={linkedin}
              alt="linkedin link"
            />
          </a>
          <a
            href={git}
            target="_blank"
            rel="noreferrer">
            <img
              src={github}
              alt="github link"
            />
          </a>
        </div>
      </div>
      <div className="card-corners bottom">
        <img
          src={program}
          alt="program logo"
        />
        <p>{initial}</p>
      </div>
    </div>
  );
};

export default Card;
