import { Link } from "react-router-dom";
import "./promote.css";

const Promote = () => {
  return (
    <div className="promote-background">
      <div className="promote-container">
        <h1 className="promote-tags">
          You Search. You Decide.
          <span>Then Decouple.</span>
        </h1>
        <p>
          Our Latest Product:{" "}
          <Link to="dashboard">The corporate sustainability dashboard</Link>
        </p>
      </div>
    </div>
  );
};

export default Promote;
