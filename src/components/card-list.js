import Card from "./card";
import React from "react";

const CardList = ({ seniors }) => {
  const seniorsArray = seniors.map((senior) => {
    return (
      <Card
        key={senior.id}
        nickname={senior.nickname}
        position={senior.position}
        language={senior.language}
        git={senior.githubAcc}
        link={senior.linkedinAcc}
      />
    );
  });

  return <div className="card-container">{seniorsArray}</div>;
};

export default CardList;
