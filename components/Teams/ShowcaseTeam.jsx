import React from "react";

//import css
import classes from "./ShowcaseTeam.module.css";

const ShowcaseTeam = () => {
  return (
    <div className={classes.ShowcaseTeam}>
      <div className={classes.container}>
        <h1 className={classes.teamHeader}>Meet The Team</h1>
        <p className={classes.teamInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta
          est consequuntur hic atque ullam non quis nisi fugiat quos. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
          itaque nam necessitatibus, reiciendis quisquam!
        </p>
      </div>
    </div>
  );
};

export default ShowcaseTeam;
