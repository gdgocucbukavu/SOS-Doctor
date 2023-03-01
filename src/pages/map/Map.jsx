import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";
import axios from "axios";
import styled from "styled-components";
import img from "./asset/hospital-building.png";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

function MyComponent({ location }) {
  console.log(location);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBe3yWTT3EaTOalJAECt83laDW1JQ-Ba84",
    language: "fr",
  });

  const [hospital, setHospital] = useState([]);

  const [map, setMap] = React.useState(null);

  const handleOpenMap = (id, localisation) => {
    window.open(`https://www.google.com/maps/place/?q=place_id:${id}`);
  };

  useEffect(() => {
    axios
      .get(`https://apigsdc.herokuapp.com/hp/${location.lat}/${location.lng}`)
      .then((res) => {
        setHospital(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(hospital);

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
    <MapContainer>
      <div className="hospitalCard">
        {hospital.map((hp) => {
          return (
            <div className="card" key={hp.id}>
              <img src={img} alt="ima" />

              <div className="card-body">
                <h5 className="card-title">{hp.name}</h5>
                <p className="card-text">{hp.vicinity}</p>
              </div>
              <div className="action">
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenMap(hp.place_id)}
                >
                  <FaMapMarkedAlt size={20} />
                </button>
                {/* <button className="btn btn-primary">
                  <FaPhoneAlt size={20} />
                </button> */}
              </div>
            </div>
          );
        })}
      </div>
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
            {hospital.map((hp) => {
              console.log(hp.geometry.location);

              return (
                <Marker
                  position={hp.geometry.location}
                  key={hp.id}
                  icon={img}
                  label={hp.name}
                />
              );
            })}
            <Circle
              center={location}
              radius={180}
              options={{
                strokeColor: "#ae376d",
                strokeWeight: 4,
              }}
            />
            <h2>Hey bro</h2>
          </>
        </GoogleMap>
      )}
    </MapContainer>
  );
}

export default React.memo(MyComponent);

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .hospitalCard {
    position: absolute;
    bottom: 6rem;
    left: 10px;
    right: 10px;
    width: 90%;
    margin: auto;
    height: 100px;
    z-index: 1000;

    display: flex;
    overflow-x: auto;
    gap: 15px;

    @media screen and (max-width: 768px) {
      bottom: 140px;

      min-height: 150px;
    }
    .card {
      min-width: 300px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      min-height: 100px;
      margin-bottom: 10px;

      @media screen and (max-width: 768px) {
        height: 70px;
      }

      @keyframes open {
        0% {
          opacity: 0;
          transform: translateX(20px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      img {
        width: 30px;
        height: 30px;
        margin-left: 10px;
      }

      .card-body {
        margin-left: 10px;
        .card-title {
          font-size: 1rem;
        }
        .card-text {
          font-size: 0.8rem;
        }
      }
      .action {
        margin-left: 10px;
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;

        .btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #39c3f6;
          color: #fff;
          border: none;
          cursor: pointer;

          &:last-child {
            background-color: #ae376d;
          }
        }
      }
    }
  }
`;
