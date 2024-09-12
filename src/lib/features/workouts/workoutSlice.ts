import { createSlice } from "@reduxjs/toolkit";

export interface CoordsInterface {
  lat: number;
  lng: number;
}

export interface WorkoutInterface {
  [k: string]: string | number | CoordsInterface;
  id: number;
  title: string;
  description: string;
  date: string;
  distance: string;
  duration: string;
  elevation: string;
  activity: string;
  difficulty: string;
  coords: CoordsInterface;
}

interface WorkoutState {
  workouts: WorkoutInterface[];
}

const initialState: WorkoutState = {
  workouts: [],
};

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    FetchStorageWorkouts: (state, action) => {
      state.workouts = [...action.payload];
    },
    CreateWorkout: (state, action) => {
      state.workouts.push(action.payload);
      localStorage.setItem("workouts", JSON.stringify(state.workouts));
    },
    DeleteWorkout: (state, action) => {
      state.workouts = state.workouts.filter(
        (workout) => workout.id !== action.payload
      );
      localStorage.setItem("workouts", JSON.stringify(state.workouts));
    },
    DeleteAllWorkouts(state) {
      state.workouts.splice(0, state.workouts.length);
      localStorage.clear();
    },
    EditWorkout: (state, action) => {
      const newList = state.workouts.map((workout) => {
        if (workout.id === action.payload.id) {
          const updatedItem = {
            ...action.payload,
          };
          return updatedItem;
        }
      });
      state.workouts = [...newList];
      localStorage.setItem("workouts", JSON.stringify(state.workouts));
    },
  },
});

export const {
  CreateWorkout,
  DeleteWorkout,
  DeleteAllWorkouts,
  EditWorkout,
  FetchStorageWorkouts,
} = workoutSlice.actions;
export default workoutSlice.reducer;
