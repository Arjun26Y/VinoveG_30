import React, { useState } from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import "./custom_style/map.css";

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

const GoogleMapComponent = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDePptgkVUlIev4emn3KxAq0EbXiOxyFBI",
  });

  return isLoaded ? (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat: 20.5937, lng: 78.9629 }}
        zoom={3}
      >
        {staffList.map((staff, index) => (
          <MarkerF
            key={index}
            position={{
              lat: staff.location.latitude,
              lng: staff.location.longitude,
            }}
            title={staff.staffName} 
            onClick={() => setSelectedStaff(staff)}
            icon={{
              url: staff.photoUrl,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ))}

        {selectedStaff && (
          <InfoWindow
            position={{
              lat: selectedStaff.location.latitude,
              lng: selectedStaff.location.longitude,
            }}
            onCloseClick={() => setSelectedStaff(null)}
          >
            <div style={{ textAlign: "center", backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "10px", borderRadius: "8px" }}>
              <img
                src={selectedStaff.photoUrl}
                alt={selectedStaff.staffName}
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
              <h4 style={{ color: "white", marginTop: "8px" }}>{selectedStaff.staffName}</h4>
              <p style={{ color: "white" }}>{selectedStaff.location.city}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(GoogleMapComponent);


