import React from "react";
import "./About.css";
import ImageRestaurant from "../../../assets/restaurant.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">New York</h2>
        <p className="about-description">
          Little Lemon is a neighborhood spot that attracts diners from all across the city. Located in New York City’s West Village, Little Lemon is “a little gem of a restaurant… with cooking consistently good and the young staff, attractive and efficient” (The New York Times). In addition to deliciously inventive Mediterranean food and a comfortable but energetic dining room.
        </p>
      </div>
      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt="restaurant food"
        height={200}
        width={300}
      />
    </div>
  );
};

export default About;
