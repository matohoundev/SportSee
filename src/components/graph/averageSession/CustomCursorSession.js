import React from "react";
import PropTypes from "prop-types";
import { Rectangle } from "recharts";

const CustomCursorSession = (props) => {
  const { points, width, height, left, right, bottom } = props;
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={points[0].x === 10 ? 0 : points[0].x}
      width={width + left + right}
      height={height + bottom + 5}
    />
  );
};

export default CustomCursorSession;

CustomCursorSession.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
};
