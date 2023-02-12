import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useEffect, useState } from "react";

const MapContainer = (props) => {
  const [location, setLocation] = useState({
    lat: -2.5,
    lng: 28.866667,
  });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const showPosition = (position) => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };
  useEffect(() => {
    getLocation();
  });
  return (
    <Map google={props.google} zoom={20} initialCenter={location}>
      <Marker position={location} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAD0mcKGSHmYBqJ5bwHXi7TYzNqAompmFc",
  language: "fr",
  LoadingContainer: MapContainer,
})(MapContainer);
