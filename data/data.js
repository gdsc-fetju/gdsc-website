/* 
Here "key" refers to the unique id given to each member
and "domain" represents the background of each profile card where 
1 - Blue
2 - Red
3 - Yellow
4 - Green
we have also created a constant for each social media base handle i.e github, linkedin, instagram
*/

import { GITHUB, LINKEDIN, INSTAGRAM } from "../constants/constants";

const data = [
  {
    name: "Prince Gupta",
    position: "Lead",
    image: "/profilePics/prince.png",
    key: 1,
    domain: 2,
    links: {
      github: GITHUB + "pr1ncegupta",
      linkedin: LINKEDIN + "pr1ncegupta",
      instagram: INSTAGRAM + "pr1ncegupta",
    },
  },
  {
    name: "Sargam Poudel",
    position: "Co Lead",
    key: 2,
    domain: 1,
    image: "/profilePics/sargam.jpg",
    links: {
      github: GITHUB + "devsargam",
      linkedin: LINKEDIN + "sargam-poudel-b85954255/",
      instagram: INSTAGRAM + "sargam.ts/",
    },
  },
  {
    name: "Henil Dudhat",
    position: "Tech Lead",
    image: "/profilePics/henil.jpg",
    key: 3,
    domain: 3,
    links: {
      github: GITHUB + "Henil677",
      linkedin: LINKEDIN + "henil-dudhat",
    },
  },
  {
    name: "Sulabh Bashyal",
    position: "Operations Lead",
    image: "/profilePics/sulabh.jpg",
    key: 4,
    domain: 4,
    links: {
      github: GITHUB + "Sulabhbashyal",
      linkedin: LINKEDIN + "sulabh-bashyal-1b1b731b6/",
      instagram: INSTAGRAM + "sulabh.bashyal/",
    },
  },
  {
    // Photo Change remaining
    name: "Akansha Shetty",
    position: "Outreach Lead",
    image: "/profilePics/akansha.jpg",
    key: 5,
    domain: 3,
    links: {
      github: GITHUB + "Akansha-S1",
      linkedin: LINKEDIN + "akansha-shwwwetty-b35a1b253",
      instagram: INSTAGRAM + "akss._.s",
    },
  },
  {
    // photo change remaining
    name: "Dr. N Suresh Kumar",
    position: "Faculty Advisor",
    image: "/profilePics/dr_suresh.jpg",
    key: 6,
    domain: 2,
    links: {
      github: GITHUB + "sureshkumar0707",
      linkedin: LINKEDIN + "sureshkumar0707",
      instagram: INSTAGRAM + "iconsureshkumar",
    },
  },
  {
    // photo change remaining
    name: "Shaileja Sahu",
    position: "Content Writer",
    image: "/profilePics/shaileja.jpg",
    key: 7,
    domain: 4,
    links: {
      github: GITHUB + "shailejasahu",
      linkedin: LINKEDIN +"saileja-sahu-203898223",
      instagram: INSTAGRAM + "shaileja_sahu/",
    },
  },
  {
    // photo change remaining
    name: "Chandana Ashritha",
    position: "Content Writer",
    image: "/profilePics/ashritha.png",
    key: 8,
    domain: 3,
    links: {
      github: GITHUB + "Ashritaneerati",
      linkedin: LINKEDIN + "ashritha-neerati-181882257",
      instagram: INSTAGRAM + "ashritha_neerati",
    },
  },
  {
    // photo change remaining
    name: "Yohanes Getinet Nuriye",
    position: "Android Facilitator ",
    image: "/profilePics/yohanes.jpg",
    key: 9,
    domain: 2,
    links: {
      github: GITHUB + "YohanesGetinet1",
      linkedin: LINKEDIN + "yohanesgetinet",
      instagram: INSTAGRAM + "yohanesgetinet/",
    },
  },
  {
    // photo change remaining
    name: "Raj Kasaudhan",
    position: "Frontend Facilitator",
    image: "/profilePics/raj_kasaudhan.png",
    key: 10,
    domain: 1,
    links: {
      github: GITHUB + "rajksd01",
      linkedin: LINKEDIN + "raj-kasaudhan",
      instagram: INSTAGRAM + "rajksd.dev/",
    },
  },
  {
    // photo change remaining
    name: "Subigya Subedi",
    position: "Frontend Facilitator",
    image: "/profilePics/subigya.jpg",
    key: 11,
    domain: 2,
    links: {
      github: GITHUB + "subigya-js",
      linkedin: LINKEDIN + "subigya-js/",
      instagram: INSTAGRAM + "subedi.js/",
    },
  },
  {
    // photo change remaining
    name: "Rahul Raj Yadav ",
    position: "Backend Facilitator ",
    image: "/profilePics/Rahul.jpg",
    key: 12,
    domain: 4,
    links: {
      github: GITHUB + "Ryrahul",
      linkedin: LINKEDIN + "rahul-raj-yadav-03b06b258/",
      instagram: INSTAGRAM + "ry_rahul_ydv/",
    },
  },

  {
    // photo change remaining
    name: "Dipendra  Bhatta",
    position: "Backend Facilitator",
    image: "/profilePics/dipendra.jpg",
    key: 13,
    domain: 3,
    links: {
      github: GITHUB + "dipenbhat557",
      linkedin: LINKEDIN + "dipendra-bhatta-38ba32259",
      instagram: INSTAGRAM + "bhattadipen557",
    },
  },

  {
    // photo change remaining
    name: "Sarvesh TS",
    position: "Cyber Security Facilitator",
    image: "/profilePics/sarveshTS.jpg",
    key: 14,
    domain: 4,
    links: {
      github: GITHUB + "Thanatos2k4",
      linkedin: LINKEDIN + "sarvesh-t-s-78472324b",
      instagram: INSTAGRAM + "_.sarveshts._/",
    },
  },

  {
    // photo change remaining
    name: "Aman Kundu",
    position: "Video Editor",
    image: "/profilePics/aman.jpg",
    key: 15,
    domain: 2,
    links: {
      github: GITHUB + "Rony-04",
      linkedin: LINKEDIN + "amankundu2004/",
      instagram: INSTAGRAM + "kundu_rony04/",
    },
  },
  {
    // photo change remaining
    name: "Kabillan T A",
    position: "Graphic Designer",
    image: "/profilePics/Kabillan.jpeg",
    key: 16,
    domain: 4,
    links: {
      github: GITHUB + "kabillan19",
      linkedin: LINKEDIN + "kabillan",
      instagram: INSTAGRAM + "kabillan.ta/",
    },
  },
  {
    // photo change remaining
    name: "Gunjit Sinha",
    position: "Cloud Facilitator",
    image: "/profilePics/Gunjit-Sinha.jpg",
    key: 17,
    domain: 10,
    links: {
      github: GITHUB + "gunjitsinha",
      linkedin: LINKEDIN + "gunjit-sinha-412735216",
      instagram: INSTAGRAM + "gunjitsinha/",
    },
  },
];
export const teamData = data;
