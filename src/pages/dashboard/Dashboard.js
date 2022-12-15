import React from "react";
import GraphActivity from "../../components/graph/activity/GraphActivity";
import GraphSession from "../../components/graph/averageSession/GraphSession";
import GraphPerformance from "../../components/graph/performance/GraphPerformance";
import GraphScore from "../../components/graph/score/GraphScore";
import BoxCard from "../../components/boxCard/BoxCard";
import Banner from "../../components/banner/Banner";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Banner />
      <div className="flex boxGraph">
        <div className="bg-blue boxGraph_main">
          <div>
            <GraphActivity />
          </div>
          <div>
            <GraphSession />
            <GraphPerformance />
            <GraphScore />
          </div>
        </div>
        <div className="bg-black boxGraph_aside">
          <BoxCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
