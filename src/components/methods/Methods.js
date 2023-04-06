import { Link } from "react-router-dom";
import "./methods.css";

import * as data from "../../Data";

// Images
import Shap from "../../images/shaplyImage.png";

const Methods = () => {
  const methods = data.Methods;

  let shap_analysis = "SHAP Analysis";
  let benchmark = "Benchmarks";
  let scope = "Scope Analysis";

  return (
    <div className="methods-container">
      <div className="intro-statement">
        <h1 className="methods-tag">
          We don't believe <br /> <span>in luck</span>
        </h1>

        <p>
          From the data, analysis, and real-world scenarios, to conversion: We
          bring our best and establish our best performance to fuel a lasting
          position at the top for our clients.
        </p>
      </div>

      <div className="method-item-container shap_analysis">
        <div className="method-item-image-container">
          <img src={Shap} alt="Analysis chart" />
        </div>
        <div className="method-item-description">
          <h1> SHAP Analysis </h1>
          <p>
            An important insight is revealed by a{" "}
            <Link to="#"> SHAP (SHapley Additive exPlanations)</Link> analysis.
            We explained the output of an hyper-tuned XGBoost model trained on
            our dataset. The figure explains the impact of various variables on
            the carbon estimations for scope 1. We used this analysis to
            determine the importance of revenue and other features. The research
            has shown that revenue is not as important as common practice in
            emission estimation would suggest. Although revenue is not
            unimportant, other factors consistently outweigh its influence on
            the predicted emissions. In the figure, we show the least impacting
            factors.
          </p>
        </div>
      </div>
      {methods.map(({ id, title, description, image }) => (
        <div
          key={id}
          className={`method-item-container ${
            title === benchmark ? "benchmark" : "scope"
          } `}
        >
          <div className="method-item-image-container">
            <img src={image} alt="" />
          </div>
          <div className="method-item-description">
            <h1> {title} </h1>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Methods;
