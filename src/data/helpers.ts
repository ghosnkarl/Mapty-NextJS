import bikeImg from "../assets/bike-icon.svg";
import walkImg from "../assets/walk-icon.svg";
import runImg from "../assets/run-icon.svg";
import hikeImg from "../assets/hike-icon.svg";

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function deCapitalize(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function getWorkoutIcon(workoutType: string): string {
  if (workoutType === "Running") return runImg;
  if (workoutType === "Walking") return walkImg;
  if (workoutType === "Hiking") return hikeImg;
  if (workoutType === "Biking") return bikeImg;

  return "";
}
