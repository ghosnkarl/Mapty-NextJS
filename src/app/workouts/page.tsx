"use client";
import { useDispatch, useSelector } from "react-redux";
import classes from "./page-workouts.module.css";
import {
  ACTIVITES_OPTIONS,
  DIFFICULTIES_OPTIONS,
  SORT_OPTIONS,
  SortInterface,
} from "@/data/data";
import { AppDispatch, RootState } from "@/lib/store";
import { ChangeEvent, useEffect, useState } from "react";
import deleteImg from "../../assets/delete-icon.svg";
import Image from "next/image";
import { Dialog } from "@mui/material";
import { DeleteAllWorkouts } from "@/lib/features/workouts/workoutSlice";

interface DropdownProps {
  sort: SortInterface;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Dropdown({ sort, onChange }: DropdownProps) {
  return (
    <div className={classes.dropdown}>
      <label>{sort.label}</label>
      <select
        onChange={onChange}
        className={classes["select-btn"]}
        name={sort.id}
        id={sort.id}
      >
        {sort.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.output}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Page() {
  const workouts = useSelector(
    (state: RootState) => state.workoutReducer.workouts
  );

  const dispatch = useDispatch<AppDispatch>();
  const [isDelete, setIsDelete] = useState<boolean>(false);

  function handleClose() {
    setIsDelete(false);
  }

  function handleOpen() {
    setIsDelete(true);
  }

  function handleDeleteWorkouts() {
    dispatch(DeleteAllWorkouts());
    handleClose();
  }

  const [filteredList, setFilteredList] = useState(workouts);
  const [filters, setFilters] = useState({
    search: "",
    activity: "",
    difficulty: "",
    sort: "date_asc",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: input,
    }));
  }

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    const list = workouts.filter((workout) => {
      return (
        (filters.search === "" ||
          workout.title.toLowerCase().includes(filters.search)) &&
        (filters.activity === "" || workout.activity === filters.activity) &&
        (filters.difficulty === "" || workout.difficulty === filters.difficulty)
      );
    });

    const [sort, order] = filters.sort.split("_");
    if (sort === "date") {
      list.sort((workoutA, workoutB) => {
        const a = new Date(workoutA[sort]).getTime();
        const b = new Date(workoutB[sort]).getTime();
        return order === "asc" ? a - b : b - a;
      });
    } else {
      list.sort((workoutA, workoutB) => {
        const a = +workoutA[sort];
        const b = +workoutB[sort];
        return order === "asc" ? a - b : b - a;
      });
    }

    setFilteredList(list);
  }, [filters, workouts]);

  return (
    <div className={classes.container}>
      <Dialog maxWidth="lg" open={isDelete} onClose={handleClose}>
        <div className="dialog-container">
          <h1>Are you sure?</h1>
          <p>
            Are you sure you want to delete all your workouts? This action
            cannot be undone.
          </p>

          <div className="dialog-btn--container">
            <button onClick={handleClose} className="btn btn--outline">
              Cancel
            </button>
            <button onClick={handleDeleteWorkouts} className="btn btn--delete">
              Delete Workouts
            </button>
          </div>
        </div>
      </Dialog>

      <h1 className={classes.header}>Workouts</h1>

      <input
        className={classes["search-input"]}
        type="text"
        placeholder="Search Workouts By Title"
        onChange={handleChange}
      />
      <div className={classes["filter-container"]}>
        <Dropdown sort={SORT_OPTIONS} onChange={onSelectChange} />
        <Dropdown sort={ACTIVITES_OPTIONS} onChange={onSelectChange} />
        <Dropdown sort={DIFFICULTIES_OPTIONS} onChange={onSelectChange} />
        <button
          disabled={workouts.length === 0}
          onClick={handleOpen}
          className={classes["btn-delete"]}
        >
          <Image src={deleteImg} alt="Delete icon" />
          Delete Workouts
        </button>
      </div>

      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes["table-head"]}>Workout Name</th>
            <th className={classes["table-head"]}>Date</th>
            <th className={classes["table-head"]}>Activity</th>
            <th className={classes["table-head"]}>Distance</th>
            <th className={classes["table-head"]}>Duration</th>
            <th className={classes["table-head"]}>Elevation</th>
            <th className={classes["table-head"]}>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((workout) => (
            <tr key={workout.id} className={classes["table-row"]}>
              <td>{workout.title}</td>
              <td>{workout.date}</td>
              <td>{workout.activity}</td>
              <td>{workout.distance}</td>
              <td>{workout.duration}</td>
              <td>{workout.elevation}</td>
              <td>{workout.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
