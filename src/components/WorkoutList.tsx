"use client";
import { useSelector } from "react-redux";
import "../styles/workout-list.css";
import Workout from "./Workout";
import { RootState } from "@/lib/store";

export default function WorkoutList() {
  const workouts = useSelector(
    (state: RootState) => state.workoutReducer.workouts
  );

  return (
    <ul className="list">
      <li>
        <div className="sort-container">
          <h1>Workouts</h1>
        </div>
      </li>
      {workouts &&
        workouts.length > 0 &&
        workouts.map((workout) => <Workout key={workout.id} {...workout} />)}
    </ul>
  );
}
