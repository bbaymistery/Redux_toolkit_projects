import React from "react";
import Img from "../../images/loading-gear.gif";
import "./loading.scss";
const Loading = () => {
  return (
    <div className="loading">
      <img src={Img} alt="" />
    </div>
  );
};

export default Loading;
