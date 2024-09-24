import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const UserLocationMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const location = useLocation();

  const { latitude, longitude, staffName, photoUrl } = location.state || {};

  useEffect(() => {
    const loadMap = () => {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: 10,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: mapInstance.current,
        title: staffName,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="text-align: center;">
            <img src="${photoUrl}" alt="${staffName}" style="width: 50px; height: 50px; border-radius: 50%;" />
            <div>${staffName}</div>
          </div>
        `,
      });

      infoWindow.open(mapInstance.current, marker);
    };

    if (window.google) {
      loadMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDePptgkVUlIev4emn3KxAq0EbXiOxyFBI`;
      script.async = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    }
  }, [latitude, longitude, staffName, photoUrl]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default UserLocationMap;
