import React from "react";
import PropTypes from "prop-types";

const Banner = ({ infos }) => {
  const {
    userInfos = {
      firstName: "",
    },
  } = infos;

  return (
    <div className="banner flex flex-col justify-center gap-y-xl">
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

Banner.propTypes = {
  infos: PropTypes.object,
};
