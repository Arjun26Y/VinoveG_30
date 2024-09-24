import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoogleMapComponent from "./map";
import Sidebar from "./comonComponent/sidebar";
import Header from "./comonComponent/header";
import Footer from "./comonComponent/footer";
import StaffGrid from "./comonComponent/staffGrid";
import Timer from "./comonComponent/timer";
import UserLocationMap from "./comonComponent/userLocationMap";
import "./custom_style/app.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<GoogleMapComponent />} />
              <Route path="/attendance" element={<StaffGrid />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/user-location" element={<UserLocationMap />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

