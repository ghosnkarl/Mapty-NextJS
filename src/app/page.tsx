"use client";
import "../app/globals.css";
import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { FetchStorageWorkouts } from "@/lib/features/workouts/workoutSlice";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  // This fetches the workouts from local storage once
  useEffect(() => {
    if (localStorage.getItem("workouts")) {
      const workouts = JSON.parse(localStorage.getItem("workouts") || "");
      dispatch(FetchStorageWorkouts(workouts));
    }
  });

  return (
    <>
      <Sidebar />
      <Map />
    </>
  );
}
