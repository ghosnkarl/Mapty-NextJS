import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "./features/workouts/workoutSlice";
import formReducer from "./features/form/formSlice";

export const store = configureStore({
  reducer: { workoutReducer, formReducer },
});

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof store>;

// Infer the "RootState" and "AppDispatch" types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
