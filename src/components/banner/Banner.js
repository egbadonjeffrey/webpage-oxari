import Blob from "../blob/Blob";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <Blob />
      </div>
      <div className="home-banner">
        <div className="intro-text">
          <div>
            <h1>finding real</h1>
            <h1>green growth</h1>
          </div>
          <span>one data point at a time</span>
        </div>
        <div className="bottom-text">
          We envision a platform that evaluates companies’ and countries’
          financial and environmental performance using machine learning. Facing
          climate change-related shifts in the financial markets, we can provide
          important information for investors at low cost and high quality.
        </div>
      </div>
    </>
  );
};

export default Banner;
