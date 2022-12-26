/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";

const Card = ({ icons, text, value, suffix }) => {
  return (
    <div className="card-aside bg-gray flex items-center gap-x-xl">
      <div
        className={`card-aside__icons card-aside__icons--${text} flex justify-center items-center`}
      >
        <img src={icons} alt={`image pour ${text}`} />
      </div>
      <div className="flex flex-col card-aside__text">
        <span className="color-dark font-bold">
          {value}
          {suffix}
        </span>
        <span className="color-gray">{text}</span>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  icons: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.number,
  suffix: PropTypes.string,
};
