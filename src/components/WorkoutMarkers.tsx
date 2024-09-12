import { Marker, Popup } from "react-leaflet";
import "../styles/workouts-markers.css";
import { WorkoutInterface } from "@/lib/features/workouts/workoutSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const WorkoutMarkers = () => {
  const workouts = useSelector(
    (state: RootState) => state.workoutReducer.workouts
  );

  return (
    <div>
      (
      {workouts.map((workout: WorkoutInterface) => {
        return (
          <Marker key={workout.title} position={workout.coords}>
            <Popup>
              <div>
                <p className="popup--difficulty">{workout.difficulty}</p>
                <p className="marker-popup--difficulty">{workout.title}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
      )
    </div>
  );
};

export default WorkoutMarkers;
