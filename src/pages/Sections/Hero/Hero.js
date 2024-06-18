import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import Image from "../../../assets/restaurant_chef.jpg";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">New York</h2>
          <p>
            Little Lemon is a neighborhood spot that attracts diners from all across the city. Located in New York City’s West Village, Little Lemon is “a little gem of a restaurant… with cooking consistently good and the young staff, attractive and efficient” (The New York Times). In addition to deliciously inventive Mediterranean food and a comfortable but energetic dining room.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;
