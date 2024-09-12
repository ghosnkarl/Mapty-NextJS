import "../styles/sidebar.css";
import Form from "@/components/Form";
import EmptyWorkouts from "./EmptyWorkouts";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import WorkoutList from "./WorkoutList";

export default function Sidebar() {
  const workouts = useSelector(
    (state: RootState) => state.workoutReducer.workouts
  );
  const form = useSelector((state: RootState) => state.formReducer.isOpen);
  // const content = (
  //   <Form
  //     onAdd={() => {}}
  //     onCancel={() => {}}
  //     coords={{ lat: 12312, lng: 12312 }}
  //   />
  // );
  let content = <EmptyWorkouts />;

  if (workouts.length > 0) {
    content = <WorkoutList />;
  }

  if (form) {
    content = <Form />;
  }

  return <aside className="sidebar">{content}</aside>;
}
