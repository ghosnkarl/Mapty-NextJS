import { createRef, FormEvent } from "react";
import "../styles/form.css";

import { ACTIVITES, LEVELS } from "../data/data";
import Input from "./Input";
import InputButtonGroup from "./InputButtonGroup";
import {
  CreateWorkout,
  EditWorkout,
} from "@/lib/features/workouts/workoutSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { CloseForm } from "@/lib/features/form/formSlice";

const Form = () => {
  const activityRef = createRef<HTMLButtonElement>();
  const difficultyRef = createRef<HTMLButtonElement>();
  const coords = useSelector((state: RootState) => state.formReducer.coords);
  const workout = useSelector((state: RootState) => state.formReducer.workout);

  const activityDefault = workout
    ? ACTIVITES.findIndex((item) => item.value === workout?.activity)
    : 0;

  const difficultyDefault = workout
    ? LEVELS.findIndex((item) => item.value === workout?.difficulty)
    : 0;

  const dispatch = useDispatch<AppDispatch>();

  function handleCloseForm() {
    dispatch(CloseForm());
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;
    const difficultyValue =
      difficultyRef!.current!.value === ""
        ? "Easy"
        : difficultyRef!.current!.value;

    const activityValue =
      activityRef!.current!.value === ""
        ? "Running"
        : activityRef!.current!.value;

    const title = target.elements.namedItem("title") as HTMLInputElement;
    const description = target.elements.namedItem(
      "description"
    ) as HTMLInputElement;
    const date = target.elements.namedItem("date") as HTMLInputElement;
    const distance = target.elements.namedItem("distance") as HTMLInputElement;
    const duration = target.elements.namedItem("duration") as HTMLInputElement;
    const elevation = target.elements.namedItem(
      "elevation"
    ) as HTMLInputElement;

    if (workout) {
      dispatch(
        EditWorkout({
          id: workout.id,
          title: title.value,
          description: description.value,
          date: date.value,
          distance: distance.value,
          duration: duration.value,
          elevation: elevation.value,
          activity: activityValue,
          difficulty: difficultyValue,
          coords: workout?.coords,
        })
      );
    }

    if (coords) {
      dispatch(
        CreateWorkout({
          id: Date.now(),
          title: title.value,
          description: description.value,
          date: date.value,
          distance: distance.value,
          duration: duration.value,
          elevation: elevation.value,
          activity: activityValue,
          difficulty: difficultyValue,
          coords: coords ? coords : workout?.coords,
        })
      );
    }

    handleCloseForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-btn-container">
        <button
          type="button"
          className="btn btn--outline"
          onClick={handleCloseForm}
        >
          Cancel
        </button>
        <button className="btn btn--filled">
          {workout ? "Edit" : "Save"} Workout
        </button>
      </div>

      <div className="form-container">
        <h1 className="header">{workout ? "Edit" : "Create"} Workout</h1>

        <Input
          id="title"
          label="Title"
          type="text"
          name="title"
          defaultValue={workout?.title}
        />
        <Input
          id="description"
          label="Description"
          type="text"
          name="description"
          defaultValue={workout?.description}
        />

        <Input
          id="date"
          label="Date"
          type="date"
          name="date"
          defaultValue={workout?.date}
        />

        <Input
          id="distance"
          label="Distance"
          type="number"
          name="distance"
          placeholder="km"
          min="0"
          step=".01"
          defaultValue={workout?.distance}
        />

        <Input
          id="duration"
          label="Duration"
          type="number"
          name="duration"
          placeholder="min"
          min="0"
          defaultValue={workout?.duration}
        />

        <Input
          id="elevation"
          label="Elevation"
          type="number"
          name="elevation"
          placeholder="m"
          min="0"
          defaultValue={workout?.elevation}
        />

        <InputButtonGroup
          ref={activityRef}
          label="Activity"
          options={ACTIVITES}
          hasIcon={true}
          defaultValue={activityDefault}
        />

        <InputButtonGroup
          ref={difficultyRef}
          label="Difficulty"
          options={LEVELS}
          hasIcon={false}
          defaultValue={difficultyDefault}
        />
      </div>
    </form>
  );
};

export default Form;
