import { createSlice } from "@reduxjs/toolkit";
import { CoordsInterface, WorkoutInterface } from "../workouts/workoutSlice";

export interface FormInterface {
  isOpen: boolean;
  coords: CoordsInterface | null;
  workout?: WorkoutInterface | null;
}

const initialState: FormInterface = {
  isOpen: false,
  coords: null,
  workout: null,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    OpenForm: (state, action) => {
      state.isOpen = true;
      state.coords = action.payload;
    },

    CloseForm: (state) => {
      state.isOpen = false;
      state.coords = null;
      state.workout = null;
    },

    EditForm: (state, action) => {
      state.isOpen = true;
      state.workout = action.payload;
    },
  },
});

export const { OpenForm, CloseForm, EditForm } = formSlice.actions;
export default formSlice.reducer;
