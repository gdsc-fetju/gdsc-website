import React from "react";

//import css
import classes from "./ShowcaseTeam.module.css";

const ShowcaseTeam = () => {
  return (
    <div className={classes.ShowcaseTeam}>
      <div className={classes.container}>
        <h1 className={classes.teamHeader}>Meet The Team</h1>
        <p className={classes.teamInfo}>
          Every member of this club is choosen for their best of the capibilites
          and they are here to provide the best to the community and create a
          better coding friendly campus in Jain University
        </p>
      </div>
    </div>
  );
};

export default ShowcaseTeam;
