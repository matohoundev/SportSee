import React from "react";
import PropTypes from "prop-types";

const ActivityTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="tooltip--Activity flex flex-col items-center justify-around bg-red">
        <p className="text text-white font-medium text-xsss">
          {payload[0].value}kg
        </p>
        <p className="text text-white font-medium text-xsss">
          {payload[1].value}Kcal
        </p>
      </div>
    );
  }
  return null;
};

export default ActivityTooltip;

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
