import { Link } from "react-router-dom";
import "./successFactor.css";

const SuccessFactor = () => {
  return (
    <div className="success-factor-container">
      <h1>
        Our Success <br /> <span>Factors</span>
      </h1>

      <div className="factors-container">
        <div className="impact">
          <h1>Impact</h1>
          <div>
            Changing the way society works by investing in the companies which
            push us all towards sustainable development by creating innovative
            and green business cases and products.
          </div>
        </div>
        <div className="green-growth">
          <h1>Green Growth</h1>
          <div>
            The concept of green growth is an economic and political target
            without real proof of concept. We believe there is a way to
            facilitate green growth by finding the companies that are able to{" "}
            <Link to="#" className="decouple">
              decouple
            </Link>
          </div>
        </div>
        <div className="risk-assessment">
          <h1>Risk Assessment</h1>
          <div>
            In the future, successful businesses will have to incorporate
            corporate sustainability information into investment decisions in
            order to prevent losing money as a result of negative future
            impacts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessFactor;
