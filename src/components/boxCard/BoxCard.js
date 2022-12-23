import React from "react";
import Card from "../card/Card";
import fire from "../../assets/icons/fire.svg";

const BoxCard = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Card icons={fire} />
      <Card icons={fire} />
      <Card icons={fire} />
      <Card icons={fire} />
    </div>
  );
};

export default BoxCard;
