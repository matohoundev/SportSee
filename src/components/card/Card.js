import React from "react";

const Card = ({ icons }) => {
  return (
    <div className="card-aside bg-gray flex items-center gap-x-xl">
      <div className="card-aside__icons flex justify-center items-center">
        <img src={icons} alt="fire" />
      </div>
      <div className="flex flex-col card-aside__text">
        <span className="color-dark font-bold">1,930kCal</span>
        <span className="color-gray">Calories</span>
      </div>
    </div>
  );
};

export default Card;
