import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const staffList = [
  {
    staffName: "Rajesh Kumar",
    location: {
      city: "New Delhi",
      latitude: 28.6139,
      longitude: 77.209,
    },
    photoUrl:
      "https://uploads.commoninja.com/searchengine/wordpress/user-avatar-reloaded.png",
  },
  {
    staffName: "Aarti Sharma",
    location: {
      city: "Mumbai",
      latitude: 19.076,
      longitude: 72.8777,
    },
    photoUrl: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    staffName: "Sunil Verma",
    location: {
      city: "Bengaluru",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    photoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    staffName: "Priya Iyer",
    location: {
      city: "Chennai",
      latitude: 13.0827,
      longitude: 80.2707,
    },
    photoUrl: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    staffName: "Anil Singh",
    location: {
      city: "Kolkata",
      latitude: 22.5726,
      longitude: 88.3639,
    },
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    staffName: "Meena Patel",
    location: {
      city: "Ahmedabad",
      latitude: 23.0225,
      longitude: 72.5714,
    },
    photoUrl: "https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    staffName: "Vikas Deshmukh",
    location: {
      city: "Pune",
      latitude: 18.5204,
      longitude: 73.8567,
    },
    photoUrl:
      "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    staffName: "Neha Kapoor",
    location: {
      city: "Jaipur",
      latitude: 26.9124,
      longitude: 75.7873,
    },
    photoUrl: "https://plus.unsplash.com/premium_photo-1670002383626-10c63bbe67d9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    staffName: "Ravi Pandey",
    location: {
      city: "Lucknow",
      latitude: 26.8467,
      longitude: 80.9462,
    },
    photoUrl:
      "https://images.unsplash.com/photo-1544724107-6d5c4caaff30?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    staffName: "Swati Sinha",
    location: {
      city: "Hyderabad",
      latitude: 17.385,
      longitude: 78.4867,
    },
    photoUrl: "https://plus.unsplash.com/premium_photo-1664541336979-3765585f5ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const StaffGrid = () => {
  const navigate = useNavigate();

  const handleMapIconClick = (latitude, longitude, staffName, photoUrl) => {
    navigate("/user-location", {
      state: { latitude, longitude, staffName, photoUrl },
    });
  };

  return (
    <div>
      <h2>Staff List</h2>
      <div style={gridStyle}>
        {staffList.map((staff, index) => (
          <div key={index} style={rowStyle}>
            <div style={columnStyle}>
              <img
                src={staff.photoUrl}
                alt={staff.staffName}
                style={imageStyle}
              />
            </div>
            <div style={columnStyle}>
              <span>{staff.staffName}</span>
            </div>
            <div style={columnStyle}>
              <span>{staff.location.city}</span>
            </div>
            <div style={columnStyle}>
              <FaMapMarkerAlt
                size={24}
                color="blue"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleMapIconClick(
                    staff.location.latitude,
                    staff.location.longitude,
                    staff.staffName,
                    staff.photoUrl
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 2fr 2fr 1fr",
  gap: "10px",
  marginBottom: "20px",
  border: "1px solid #ccc",
  padding: "10px",
};

const rowStyle = {
  display: "contents",
  padding: "10px",
  borderBottom: "1px solid #ccc",
};

const columnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};

const mapStyle = {
  width: "100%",
  height: "400px",
  marginTop: "20px",
};

export default StaffGrid;
