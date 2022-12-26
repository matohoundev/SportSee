import React from "react";
import PropTypes from "prop-types";

const SessionTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="tooltip--Session bg-white">
        <p className="font-medium text-xsss">{payload[0].value}min</p>
      </div>
    );
  }
  return null;
};

export default SessionTooltip;

SessionTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
