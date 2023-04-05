import "./advantages.css";
import Plant from "../../images/plantImage.jpeg";
import { BsFillRocketTakeoffFill, BsFillGearFill } from "react-icons/bs";
import { SiFastly } from "react-icons/si";

const Advantages = () => {
  return (
    <div className="key-advantages">
      <div className="key-points-container">
        <h1>
          Our Key <br /> <span>Advantages</span>
        </h1>

        <div className="rocket-key">
          <div className="key-image-container">
            <BsFillRocketTakeoffFill className="icon" />
          </div>
          <div>Forward-looking and time efficient</div>
        </div>
        <div className="fast-key">
          <div className="key-image-container">
            <SiFastly className="icon" />
          </div>
          <div>
            Fast and reliable emissions estimate for over 30,000 companies and
            growing
          </div>
        </div>
        <div className="system-key">
          <div className="key-image-container">
            <BsFillGearFill className="icon" />
          </div>
          <div>Backed by carefully-crafted machine learning algorithms</div>
        </div>
      </div>
      <div className="image-section-container">
        <img src={Plant} alt="hands holding growing plant" />
      </div>
    </div>
  );
};

export default Advantages;
