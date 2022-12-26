import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiServices from "../../../services/ApiServices/ApiServices";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ActivityTooltip from "./ActivityTooltip";

const GraphActivity = () => {
  const [activity, setActivity] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getUserActivityById(id).then((res) => setActivity(res.data));
  }, [id]);

  const {
    sessions = [
      {
        day: "",
        kilogram: 0,
        duration: 0,
      },
    ],
  } = activity;

  const sessionsFormartedDay = sessions.map((data, index) => {
    return { ...data, day: `${index + 1}` };
  });

  return (
    <div className="graph__activity h-md">
      <div className="graph__activity_header flex justify-between items-center">
        <h2>Activité quotidienne</h2>
        <div className="content flex">
          <div className="content__aside">
            <div className="icon rounded bg-dark"></div>
            <p className="text font-medium text-sm color-gray">Poids (kg)</p>
          </div>
          <div className="content__aside">
            <div className="icon rounded bg-red"></div>
            <p className="text font-medium text-sm color-gray">
              Calories brûlées (kCal)
            </p>
          </div>
        </div>
      </div>
      <ResponsiveContainer height="84%">
        <BarChart data={sessionsFormartedDay} barGap={8}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey={"day"}
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15.5}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount="4"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 20", "dataMax + 10"]}
            hide={true}
          />
          <Tooltip content={<ActivityTooltip />} />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphActivity;
