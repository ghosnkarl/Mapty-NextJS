import { OpenForm } from "@/lib/features/form/formSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { LeafletMouseEvent } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";

const AddWorkout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentCoords = useSelector(
    (state: RootState) => state.formReducer.coords
  );

  useMapEvents({
    click: (e: LeafletMouseEvent) => {
      dispatch(
        OpenForm({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        })
      );
    },
  });

  return (
    <>
      {currentCoords && (
        <Marker position={currentCoords}>
          <Popup>Adding Workout...</Popup>
        </Marker>
      )}
    </>
  );
};

export default AddWorkout;
