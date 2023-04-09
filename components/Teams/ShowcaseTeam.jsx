import React from "react";

//import css
import classes from "./ShowcaseTeam.module.css";

const ShowcaseTeam = () => {
  return (
    <div className={classes.ShowcaseTeam}>
      <div className={classes.container}>
        <h1 className={classes.teamHeader}>Meet The Team</h1>
        <p className={classes.teamInfo}>
          Every member of the society has always been passionate and hard working towards their goal, creating a positive work environment. Their support and will to help each other out in every way possible is what makes GDSC FET-JU a &quot;team&quot;.
        </p>
      </div>
    </div>
  );
};

export default ShowcaseTeam;
