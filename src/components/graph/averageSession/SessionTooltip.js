import React from "react";

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
