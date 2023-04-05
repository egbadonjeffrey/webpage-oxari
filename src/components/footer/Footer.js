import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="products-container">
          <h1>Products</h1>
          <div className="products">
            <Link to="/dashboard">Temperature Score Dashboard</Link>
            <span> - ESG-Driven Company Evaluation</span>
          </div>
        </div>
        <div className="resources-container">
          <h1>Resources</h1>
          <ul>
            <li>
              <Link to="/aboutus">About us</Link>{" "}
            </li>
            <li>
              <Link to="/mission">Mission</Link>{" "}
            </li>
            <li>
              <Link to="/blog">Blog</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="contact-container">
          <h1>Contact</h1>
          <ul>
            <li>
              <span>Address</span>
              <span>-</span>
              <span>Utrecht, NL</span>
            </li>
            <li>
              <span>Email</span>
              <span>-</span>
              <span>contact@oxari.io</span>
            </li>
            <li>
              <span>VAT number</span>
              <span>-</span>
              <span>NL 862416814 B01</span>
            </li>
            <li>
              <span>Chamber of Commerce</span>
              <span>-</span>
              <span>82314047</span>
            </li>
            <li>
              <Link to="#">Privacy Statement</Link>
            </li>
            <li>
              <Link to="#">Terms of use</Link>
            </li>
          </ul>
        </div>
        <div className="social-container">
          <h1>Social Media</h1>
          <ul>
            <li>
              <a href="https://www.linkedIn.com">LinkedIn</a>{" "}
            </li>
            <li>
              <a href="https://www.linkedIn.com">Youtube</a>{" "}
            </li>
            <li>
              {" "}
              <span>Instagram</span>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrights">
        <div>Copyright 2022 &copy; Oxari v2</div>
      </div>
    </div>
  );
};

export default Footer;
