import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshows.css";
import "./SlideshowsQueries.css"


import img1 from "../slideshow/img1.jpg";
import img2 from "../slideshow/img2.jpg";
import img3 from "../slideshow/img3.jpg";
import img4 from "../slideshow/img4.jpg";

const Slideshows = () => {
  const images = [
    img1,
    img2,
    img3,
    img4
  ];

  return (
    <div className="slideshow-frame">
      <Slide>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[0]})` }}>
            <span>Tracks preparing</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}>
            <span>Mixing of Drum and Bass Music</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}>
            <span>Publishing</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[3]})` }}>
            <span>Listening</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshows;
