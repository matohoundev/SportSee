import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const GraphScore = ({ infos }) => {
  const score = [
    {
      value: infos.todayScore || infos.score,
      fillColor: "#e60000",
    },
    {
      value: 1 - infos.todayScore || infos.score,
      fillColor: "transparent",
    },
  ];

  return (
    <div className="graph__score relative">
      <h2 className="font-medium text-sm text-darken absolute">Score</h2>
      <p className="text-xss font-bold color-gray absolute top-md left-md text-center bg-white">
        <span>
          {score[0].value * 100}%<br />
        </span>
        de votre <br /> objectif
      </p>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {score.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphScore;

GraphScore.propTypes = {
  infos: PropTypes.object,
};
