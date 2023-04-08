import "./blob.css";
import ashBlob from "../../images/blobanimation.svg";
import purple from "../../images/purpleblob.svg";

const Blob = () => {
  return (
    <div className="container">
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="ash">
        <img src={ashBlob} alt="" />
      </div>
      <div className="shape-blob two"></div>
      <div className="blob "> </div>
      <div className=" purple">
        <img src={purple} alt="" />
      </div>
      <span className="scroll-btn">
        <span className="mouse">
          <span></span>
        </span>
      </span>
    </div>
  );
};

export default Blob;
