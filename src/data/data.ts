import bikeImg from "../assets/bike-icon.svg";
import walkImg from "../assets/walk-icon.svg";
import runImg from "../assets/run-icon.svg";
import hikeImg from "../assets/hike-icon.svg";

export const ACTIVITES = [
  { value: "Running", output: runImg },
  { value: "Hiking", output: hikeImg },
  { value: "Biking", output: bikeImg },
  { value: "Walking", output: walkImg },
];

export const LEVELS = [
  {
    value: "Easy",
    output: "Easy",
  },
  {
    value: "Moderate",
    output: "Moderate",
  },
  {
    value: "Hard",
    output: "Hard",
  },
];

export interface SortInterface {
  id: string;
  label: string;
  options: { output: string; value: string }[];
}

export const SORT_OPTIONS: SortInterface = {
  id: "sort",
  label: "Sort",
  options: [
    { output: "Date Ascending", value: "date_asc" },
    { output: "Date Descending", value: "date_desc" },
    { output: "Distance Ascending", value: "distance_asc" },
    { output: "Distance Descending", value: "distance_desc" },
    { output: "Duration Ascending", value: "duration_asc" },
    { output: "Duration Descending", value: "duration_desc" },
    { output: "Elevation Ascending", value: "elevation_asc" },
    { output: "Elevation Descending", value: "elevation_desc" },
  ],
};

export const DIFFICULTIES_OPTIONS: SortInterface = {
  id: "difficulty",
  label: "Difficulty",
  options: [
    { output: "All Difficulties", value: "" },
    { output: "Easy", value: "Easy" },
    { output: "Moderate", value: "Moderate" },
    { output: "Hard", value: "Hard" },
  ],
};

export const ACTIVITES_OPTIONS: SortInterface = {
  id: "activity",
  label: "Activity Type",
  options: [
    { output: "All Activities", value: "" },
    { output: "Running", value: "Running" },
    { output: "Hiking", value: "Hiking" },
    { output: "Biking", value: "Biking" },
    { output: "Walking", value: "Walking" },
  ],
};

export const NAV_LINKS = [
  {
    title: "Home",
    link: "/",
  },
  { title: "My Workouts", link: "/workouts" },
  { title: "About", link: "/about" },
];
