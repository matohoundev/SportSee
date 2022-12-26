import React, { useState, useEffect } from "react";
import GraphActivity from "../../components/graph/activity/GraphActivity";
import GraphSession from "../../components/graph/averageSession/GraphSession";
import GraphPerformance from "../../components/graph/performance/GraphPerformance";
import GraphScore from "../../components/graph/score/GraphScore";
import BoxCard from "../../components/boxCard/BoxCard";
import Banner from "../../components/banner/Banner";
import { useParams } from "react-router-dom";
import ApiServices from "../../services/ApiServices/ApiServices";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const {
    userInfos = {
      firstName: "",
    },
    keyData = {
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    },
    todayScore,
    score,
  } = user;

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getUserById(id).then((res) => setUser(res.data));
  }, [id]);

  return (
    <div className="dashboard">
      <Banner infos={userInfos} />
      <div className="flex boxGraph">
        <div className="bg-gray boxGraph_main flex flex-col justify-between">
          <GraphActivity />
          <div className="flex justify-between box-bottom">
            <GraphSession />
            <GraphPerformance />
            <GraphScore scoreValue={todayScore || score} />
          </div>
        </div>
        <div className="boxGraph_aside">
          <BoxCard infos={keyData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
