import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ApiServices from "../../../services/ApiServices/ApiServices";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const GraphPerformance = () => {
  const [performance, setPerformance] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getUserPerformance(id).then((res) => setPerformance(res.data));
  }, [id]);

  const {
    kind = [
      {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
    ],
    data = [
      {
        kind: 0,
        value: 0,
      },
    ],
  } = performance;

  const dataFormated = data.map((data) => {
    switch (data.kind) {
      case 1:
        return { ...data, kind: "Cardio" };
      case 2:
        return { ...data, kind: "Energie" };
      case 3:
        return { ...data, kind: "Endurance" };
      case 4:
        return { ...data, kind: "Force" };
      case 5:
        return { ...data, kind: "Vitesse" };
      case 6:
        return { ...data, kind: "Intensité" };
      default:
        return { ...data };
    }
  });

  const order = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];

  // Sort data by order array
  dataFormated.sort((a, b) => {
    return order.indexOf(a.kind) - order.indexOf(b.kind);
  });

  return (
    <div className="graph__performance bg-dark rounded-light">
      <ResponsiveContainer>
        <RadarChart outerRadius="70%" data={dataFormated}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            axisLine={false}
            dy={2}
            tick={{ fontSize: 12, fill: "white", fontWeight: 500 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphPerformance;
