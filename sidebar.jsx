import React from "react";
import { Link } from "react-router-dom";
import "../custom_style/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faClipboardCheck,
  faList,
  faFileAlt,
  faChartBar,
  faBriefcase,
  faCalendarCheck,
  faUsersCog,
  faKey,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <img
          src="https://uploads.commoninja.com/searchengine/wordpress/user-avatar-reloaded.png"
          alt="User"
          className="user-image"
        />
        <p className="user-name">Akhilesh Jangi</p>
      </div>
      <ul>
        <li>
          <Link to="/timer">
            <FontAwesomeIcon icon={faClock} /> Timer
          </Link>
        </li>
        <li>
          <Link to="/attendance">
            <FontAwesomeIcon icon={faClipboardCheck} /> Attendance
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faList} /> Activity
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faFileAlt} /> TimeSheet
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faChartBar} /> Report
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faBriefcase} /> Job Site
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faCalendarCheck} /> Time Off
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faCalendarCheck} /> Schedules
          </Link>
        </li>

        <hr style={{ border: "1px solid white", margin: "20px 0" }} />

        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faUsersCog} /> Request to Join Organization
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faKey} /> Change Password
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
