import React, { useState } from "react";

//import Css
import classes from "./TeamMember.module.css";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
//import icons
import * as FiIcons from "react-icons/fi";
import Image from "next/image";


const TeamMember = (props) => {
  let cardClassDomain, cardImgDomain, svgClassDomain;
  const [isLoading, setisLoading] = useState(true);
  switch (props.domain) {
    case 1:
      cardClassDomain = classes.card1;
      cardImgDomain = classes.cardImg1;
      svgClassDomain = classes.svgDomain1;
      break;
    case 2:
      cardClassDomain = classes.card2;
      cardImgDomain = classes.cardImg2;
      svgClassDomain = classes.svgDomain2;
      break;
    case 3:
      cardClassDomain = classes.card3;
      cardImgDomain = classes.cardImg3;
      svgClassDomain = classes.svgDomain3;
      break;
    case 4:
      cardClassDomain = classes.card4;
      cardImgDomain = classes.cardImg4;
      svgClassDomain = classes.svgDomain4;
      break;
    default:
      break;
  }

  return (
    <div className={classes.TeamMember}>

      <div className={`${classes.card} ${cardClassDomain}`}>
        <div>
          <div className={`${classes.cardImg} ${cardImgDomain}`} style={{ filter: 'blur(8px)' }}>


            <Image
              src={props.image}
              alt={props.cardName}
              height={200}
              width={200}
              unoptimized={true}
              onLoad={(event) => {
                event.target.parentNode.style.filter = 'none';
                setisLoading(false)
              }}
            />
            {isLoading && <Skeleton style={{ borderRadius: "20px " }}
              enableAnimation={true} />}
          </div>
          <div className={classes.cardBody}>
            <h1 className={classes.cardName}>{props.cardName}</h1>
            <h2 className={classes.cardDesignation}>{props.cardDesignation}</h2>
            <ul className={classes.linkList}>
              <li>
                <a href={props.links.github}>
                  <FiIcons.FiGithub className={svgClassDomain} />
                </a>
              </li>
              <li>
                <a href={props.links.linkedin}>
                  <FiIcons.FiLinkedin className={svgClassDomain} />
                </a>
              </li>
              <li>
                <a href={props.links.instagram}>
                  <FiIcons.FiInstagram className={svgClassDomain} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
