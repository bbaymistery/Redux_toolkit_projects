import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeSelectedTab } from "../../features/LeftNavbar/appNavbarSlice";
import { selectActiveTab } from "../../features/LeftNavbar/selectors";
import "./footer.scss";
const Footer = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector(selectActiveTab);
  const changeTab = (tabName) => {
    dispatch(changeSelectedTab(tabName));
  };
  return (
    <div className="footer">
      <p className="copyRight">
        Copyright © 2021 <span>Cryptoverse Inc.</span>
      </p>
      <p>All Rights Reserved.</p>
      <p>
        <Link to="/" onClick={() => changeTab("Home")}>
          {" "}
          Home
        </Link>
        <Link to="/Exchanges" onClick={() => changeTab("Exchanges")}>
          {" "}
          Exchanges{" "}
        </Link>
        <Link to="/News" onClick={() => changeTab("News")}>
          {" "}
          News
        </Link>
      </p>
    </div>
  );
};

export default Footer;
