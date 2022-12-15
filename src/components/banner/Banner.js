import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiServices from "../../services/ApiServices/ApiServices";

const Banner = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getUserById(id).then((res) => setUser(res.data));
  }, []);

  const {
    userInfos = {
      firstName: "",
    },
  } = user;

  return (
    <div className="banner flex flex-col justify-center gap-x-xl">
      <h1 className="font-medium">
        Bonjour {""}
        <span className="color-primary">{userInfos.firstName}</span>
      </h1>
      <p className="font-normal">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Banner;
