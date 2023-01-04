import React, { useState, useEffect } from "react";
import GraphActivity from "../../components/graph/activity/GraphActivity";
import GraphSession from "../../components/graph/averageSession/GraphSession";
import GraphPerformance from "../../components/graph/performance/GraphPerformance";
import GraphScore from "../../components/graph/score/GraphScore";
import BoxCard from "../../components/boxCard/BoxCard";
import Banner from "../../components/banner/Banner";
import { useParams } from "react-router-dom";
import ApiServices from "../../services/ApiServices/ApiServices";
// eslint-disable-next-line no-unused-vars
import User from "../../models/User";

/**
 * Dashboard is a React component that displays a dashboard with information about the user and graphs.
 *
 * @param {User} user - An instance of the User class representing the user.
 * @param {string} user.firstName - The user's first name.
 * @param {Object} user.keyData - The user's key data.
 * @param {number} user.keyData.calorieCount - The number of calories consumed by the user.
 * @param {number} user.keyData.proteinCount - The number of proteins consumed by the user.
 * @param {number} user.keyData.carbohydrateCount - The number of carbohydrates consumed by the user.
 * @param {number} user.keyData.lipidCount - The number of lipids consumed by the user.
 * @param {number} user.todayScore - The user's score.
 * @param {number} user.score - The user's score.
 * @param {Object} id - The user's identifier.
 * @param {Object} apiServices - The ApiServices object that allows for requests to the API.
 *
 * @return {JSX} The JSX code for the component.
 */

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
