import React from "react";
import "./team.css";

const Team = ({ team }) => {
  // console.log(team);
  return (
    <div className="team-member" key={team.id}>
      <div className="team-image-social">
        <div className="portrait-container">
          <img src={team.image} alt="paul" />
        </div>
        <div className="social">
          {team.socials.map((social) => (
            <>{social.image}</>
          ))}
        </div>
      </div>
      <div className="about-team-member">
        <h1> {team.name} </h1>
        <span>{team.title}</span>
        <p>{team.about}</p>
      </div>
    </div>
  );
};

export default Team;
