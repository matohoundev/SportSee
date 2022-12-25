import React from "react";
import Card from "../card/Card";
import fire from "../../assets/icons/fire.svg";
import apple from "../../assets/icons/apple.svg";
import chicken from "../../assets/icons/chicken.svg";
import cheeseburger from "../../assets/icons/cheeseburger.svg";

const BoxCard = ({ infos }) => {
  const cardContent = [
    {
      img: fire,
      text: "Calories",
      suffix: "kCal",
    },
    {
      img: chicken,
      text: "Proteines",
      suffix: "g",
    },
    {
      img: apple,
      text: "Glucides",
      suffix: "g",
    },
    {
      img: cheeseburger,
      text: "Lipides",
      suffix: "g",
    },
  ];

  const {
    keyData = {
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    },
  } = infos;

  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData;

  return (
    <div className="h-full flex flex-col justify-between">
      {cardContent.map((item, index) => (
        <Card
          key={index}
          icons={item.img}
          text={item.text}
          value={
            index === 0
              ? calorieCount
              : index === 1
              ? proteinCount
              : index === 2
              ? carbohydrateCount
              : lipidCount
          }
          suffix={item.suffix}
        />
      ))}
    </div>
  );
};

export default BoxCard;
