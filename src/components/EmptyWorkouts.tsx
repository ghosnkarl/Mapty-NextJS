import Image from "next/image";
import emptyWorkoutsImg from "../assets/empty-workouts.svg";
import "../styles/empty-workouts.css";

export default function EmptyWorkouts() {
  return (
    <div className="empty-workouts">
      <Image
        height={100}
        width={100}
        src={emptyWorkoutsImg}
        alt="Icon of list items"
        priority
      />
      <p className="empty-workouts--title">No Workouts</p>
      <p className="empty-workouts--description">
        Click on the map to create a new workout.
      </p>
    </div>
  );
}
