import React from "react";
import "../custom_style/Footer.css";
import { FaQuestionCircle, FaShieldAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <FaQuestionCircle /> <a href="#">FAQ and Help</a>
        </li>
        <li>
          <FaShieldAlt /> <a href="#">Privacy Policy</a>
        </li>
        <li>Version 2.10(1)</li>
      </ul>
    </div>
  );
};

export default Footer;
