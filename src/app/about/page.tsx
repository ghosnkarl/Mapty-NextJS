import Link from "next/link";
import classes from "./page-about.module.css";

export default function Page() {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>About</h1>
      <p>
        This project was inspired by{" "}
        <Link href="https://twitter.com/jonasschmedtman" target="_blank">
          Jonas Schmedtmann
        </Link>{" "}
        in his{" "}
        <Link
          href="https://www.udemy.com/course/the-complete-javascript-course/?couponCode=OF83024F"
          target="_blank"
        >
          Javascript
        </Link>{" "}
        course. The original project in the course is written in Javascript, but
        this project uses <strong>NextJS, TypeScript, Redux</strong> and other
        new technologies. This is a personal project designed only for learned
        purposes and gaining knowledge.
      </p>

      <p>
        This project is being developed by{" "}
        <Link href="https://www.linkedin.com/in/karl-ghosn1" target="_blank">
          Karl Ghosn
        </Link>
        , a software engineer at{" "}
        <Link href="https://neuralvisionlab.com/" target="_blank">
          NeuralVision-FZCO.
        </Link>
      </p>
    </div>
  );
}
