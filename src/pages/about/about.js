import "./about.css";
import Tricycle from "../../images/tricycleImage.png";
import * as data from "../../Data";
import TeamMember from "../../components/team_member/Team";

const About = () => {
  const Team = data.Team_Members;

  return (
    <div className="about-screen-container">
      <div className="about-intro-container">
        <div className="statement">
          <div className="image-container">
            <img
              src={Tricycle}
              alt="thumbnail of three individuals riding a tricycle"
            />
          </div>
          <div className="statement-description">
            <h1>Meet the Team</h1>
            <p>
              We are an interdisciplinary team expert in organizing,
              understanding, and analyzing data related to sustainability. We
              provide services to companies and NGOs who want data to guide
              investment and policy for the benefit of the planet. Our
              international team brings together expertise in finance,
              economics, business, computer science, artificial intelligence,
              and sustainability.
            </p>
          </div>
        </div>
      </div>
      <div className="about-team">
        {Team.map((team) => (
          <TeamMember key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default About;
