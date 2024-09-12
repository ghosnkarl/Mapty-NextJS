import Image from "next/image";
import "../styles/workout-stats.css";

interface WorkoutStatsProps {
  icon: string;
  iconText: string;
  value: string;
  spanText: string;
}

const WorkoutStats = ({
  icon,
  iconText,
  value,
  spanText,
}: WorkoutStatsProps) => {
  return (
    <>
      <Image className="stat-icon" src={icon} alt={iconText} />
      <p className="stat-text">
        {value} {spanText !== "" && <span>{spanText}</span>}
      </p>
    </>
  );
};

export default WorkoutStats;
