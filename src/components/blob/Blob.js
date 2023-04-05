import "./blob.css";
import BlobAnime from "../../images/blobanimation.svg";

const Blob = () => {
  return (
    <div className="container">
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="blob ash"></div>
      <div className="shape-blob two"></div>
      <div className="blob "> </div>
      <div className="blob purple"></div>
      <span className="scroll-btn">
        <a href="#">
          <span className="mouse">
            <span></span>
          </span>
        </a>
      </span>
    </div>
  );
};

export default Blob;
