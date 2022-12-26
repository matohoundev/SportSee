import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiServices from "../../../services/ApiServices/ApiServices";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import SessionTooltip from "./SessionTooltip.js";
import CustomCursorSession from "./CustomCursorSession";

const GraphSession = () => {
  const [averageSession, setAverageSession] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices
      .getUserAverageSession(id)
      .then((res) => setAverageSession(res.data));
  }, [id]);

  const { sessions = [{ day: 0, sessionLength: 0 }] } = averageSession;

  const sessionsFormartedDay = sessions.map((data) => {
    switch (data.day) {
      case 1:
        return { ...data, day: "L" };
      case 2:
        return { ...data, day: "M" };
      case 3:
        return { ...data, day: "M" };
      case 4:
        return { ...data, day: "J" };
      case 5:
        return { ...data, day: "V" };
      case 6:
        return { ...data, day: "S" };
      case 7:
        return { ...data, day: "D" };
      default:
        return { ...data };
    }
  });

  return (
    <div className="graph__session bg-light-red rounded-light">
      <h2 className="absolute font-medium text-sm">
        Durée moyenne des <br />
        sessions
      </h2>
      <ResponsiveContainer>
        <LineChart data={sessionsFormartedDay} strokeWidth={1}>
          <XAxis
            dataKey="day"
            stroke="red"
            dy={5}
            padding={{ right: 5, left: 5 }}
            tick={{
              fontSize: 12,
              stroke: "white",
              opacity: 0.8,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip
            content={<SessionTooltip />}
            cursor={<CustomCursorSession />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, strokeWidth: 5, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphSession;
