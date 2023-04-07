import React from "react";

// import css
import classes from "../styles/Team.module.css";

//import Component
import ShowcaseTeam from "../components/Teams/ShowcaseTeam";
import TeamList from "../components/Teams/TeamList";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// import Footer from "../UI/Footer/Footer";

function Team() {
    return (
        <div className={classes.Team}>
            <Nav />
            <ShowcaseTeam />
            <TeamList />
            <Footer />
        </div>
    );
}

export default Team;
