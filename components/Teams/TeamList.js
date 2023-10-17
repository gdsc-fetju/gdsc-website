import React from "react";

//import css
import classes from "./TeamList.module.css";

//import component
import TeamMember from "./TeamMember";

//import DataFile
import { teamData } from "../../data/data";

const TeamList = () => {
  const list = teamData.map((member) => {
    return (
      <TeamMember
        key={member.key}
        cardName={member.name}
        cardDesignation={member.position}
        image={member.image}
        links={member.links}
        domain={member.domain}
      />
    );
  });

  return (
    <div className={classes.TeamList}>
      <div className={classes.section}>
        <div className={classes.listContainer}>{list}</div>
      </div>
    </div>
  );
};

export default TeamList;
