import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAD0mcKGSHmYBqJ5bwHXi7TYzNqAompmFc",
  });
  const key = "AIzaSyAD0mcKGSHmYBqJ5bwHXi7TYzNqAompmFc";
  const [location, setLocation] = useState({
    lat: -2.5,
    lng: 28.866667,
  });

  const [map, setMap] = React.useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const showPosition = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };
  useEffect(() => {
    getLocation();

    var config = {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=cruise&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=${key}`, //the rest of your url
      secure: false, //important
    };
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(location);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>
            <Marker position={location} />
            <h2>Hey bro</h2>
          </>
        </GoogleMap>
      )}
    </div>
  );
}

export default React.memo(MyComponent);
