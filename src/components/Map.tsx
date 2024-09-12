import useGeoLocation from "@/hooks/useGeoLocation";
import { Map as MapRef } from "leaflet";
import { createRef } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import AddWorkout from "./AddWorkout";
import Image from "next/image";
import "../styles/navigate-icon.css";
import navigateImg from "../assets/location.svg";
import WorkoutMarkers from "./WorkoutMarkers";

const Map = () => {
  const mapRef = createRef<MapRef>();
  const latitude = 51.505;
  const longitude = -0.09;
  const ZOOM_LEVEL = 13;
  const location = useGeoLocation();

  function showMyLocation() {
    if (
      location &&
      location.coordinates &&
      location.loaded &&
      !location.error &&
      mapRef.current
    ) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else if (!location.loaded) {
      alert("Your location has not loaded, please try again soon.");
    } else {
      alert(location.error?.message);
    }
  }

  return (
    <>
      <MapContainer
        center={[latitude, longitude]}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        zoomControl={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddWorkout />
        <WorkoutMarkers />
        <ZoomControl position="bottomleft" />

        {location &&
          location.coordinates &&
          location.loaded &&
          !location.error && (
            <Marker
              position={[location.coordinates.lat, location.coordinates.lng]}
            >
              <Popup>
                <p>You are here</p>
              </Popup>
            </Marker>
          )}
      </MapContainer>

      <div className="fab-container" onClick={showMyLocation}>
        <Image
          className="navigate-icon"
          src={navigateImg}
          alt="Navigate Icon"
        />
      </div>
    </>
  );
};

export default Map;
