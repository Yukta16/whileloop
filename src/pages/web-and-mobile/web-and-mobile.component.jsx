import React from "react";

import "./web-and-mobile.styles.scss";

import Team from "../team/team.component";

const WebAndMobile = () => {
  const introduction = [
    "Web & Mobile development",
    "We are creative, and dedicated team of web and mobile developers who are committed to create best possible applications.",
  ];
  const profiles = [
    {
      webandmobile: {
        web: [
          [
            "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png",
            "Albert",
            "A genius",
          ],
          [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfYgZ3j9n7FXVkJp7AnDVq2azKmb-SrY_wx8AIYpaoimVBAGpO&usqp=CAU",
            "Einstein",
            "Another geek",
          ],
          [
            "https://cdn.dribbble.com/users/40756/screenshots/6232646/side-profile-woman_2x.png",
            "Jackson",
            "A web dev with 3yrs exp.",
          ],
        ],
        mobile: [
          [
            "https://i.pinimg.com/originals/d2/ef/dd/d2efdd565077907df353951b49cfebec.jpg",
            "Rachel",
            "I make things better",
          ],
          [
            "https://cdn.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg",
            "Elon Musk",
            "He is Bitchin",
          ],
          [
            "https://cdn.dribbble.com/users/3539216/screenshots/7139407/media/319564c7fbb37666564de9ebee2ea294.jpg",
            "Phoebe",
            "I'm funny",
          ],
        ],
      },
    },
  ];
  return (
    <div className="webandmobile">
      <Team introduction={introduction} departments={profiles} />
    </div>
  );
};

export default WebAndMobile;
