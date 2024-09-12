import "../styles/workout.css";
import distanceImg from "../assets/distance.svg";
import timerImg from "../assets/timer.svg";
import elevationImg from "../assets/elevation.svg";
import { getWorkoutIcon } from "../data/helpers";
import {
  DeleteWorkout,
  WorkoutInterface,
} from "@/lib/features/workouts/workoutSlice";
import Image from "next/image";
import WorkoutStats from "./WorkoutStats";
import "../styles/workout-stats.css";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { EditForm } from "@/lib/features/form/formSlice";
import { Dialog } from "@mui/material";
import { useState } from "react";

const Workout = (workout: WorkoutInterface) => {
  const workoutIcon = getWorkoutIcon(workout.activity);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  function handleClose() {
    setIsDelete(false);
  }

  function handleEditClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    dispatch(EditForm(workout));
  }

  function handleDeleteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setIsDelete(true);
  }

  function handleDeleteWorkout() {
    dispatch(DeleteWorkout(workout.id));
    handleClose();
  }

  return (
    <>
      <Dialog aria-modal maxWidth="lg" open={isDelete} onClose={handleClose}>
        <div className="dialog-container">
          <h1>Are you sure?</h1>
          <p>
            Are you sure you want to delete this workout? This action cannot be
            undone.
          </p>

          <div className="dialog-btn--container">
            <button onClick={handleClose} className="btn btn--outline">
              Cancel
            </button>
            <button onClick={handleDeleteWorkout} className="btn btn--delete">
              Delete Workout
            </button>
          </div>
        </div>
      </Dialog>
      <li className="list-item">
        <div className="workout-img">
          <Image src={workoutIcon} alt={`${workout.activity} Icon`} />
        </div>
        <div className="list-item--container-2">
          <p className="list-item--title">{workout.title}</p>

          <div className="list-item--container-3">
            <WorkoutStats
              icon={timerImg}
              iconText="Timer Icon"
              value={workout.duration}
              spanText=""
            />

            <WorkoutStats
              icon={distanceImg}
              iconText="Distance Icon"
              value={workout.distance}
              spanText="km"
            />

            <WorkoutStats
              icon={elevationImg}
              iconText="Elevation Icon"
              value={workout.elevation}
              spanText="m"
            />
          </div>
        </div>
        <EditButton handleEditClick={handleEditClick} />
        <DeleteButton handleDeleteClick={handleDeleteClick} />
      </li>
    </>
  );
};

export default Workout;
