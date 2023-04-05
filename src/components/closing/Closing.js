import { Link } from "react-router-dom";
import "./closing.css";

const Closing = () => {
  return (
    <div className="closing-container">
      <div className="closing-statement">
        <div className="closing-statement-inner">
          <h2>
            See what <span>Oxari</span> can do for you
          </h2>
          <p>
            Gain insights about the environmental impact of companies such as
            carbon emission estimations, temperature score, decoupling
            indicators, and position within the global market.
          </p>
          <p>
            Using our expertise this information can be seamlessly integrated in
            order to influence the next important investment decisions.
          </p>
          <p>
            Browse the latest posts on the Oxari <Link to="/blog">blog</Link>{" "}
            and try out our <Link to="/dashboard">dashboard</Link> to stay
            updated with all the current developments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Closing;
