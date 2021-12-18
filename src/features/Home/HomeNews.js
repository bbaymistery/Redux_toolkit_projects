import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "../../components/NewsCard/NewsCard";
import { changeSelectedTab } from "../LeftNavbar/appNavbarSlice";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useDispatch } from "react-redux";
const HomeNews = () => {
  const dispatch = useDispatch();
  const changeTab = (tabName) => {
    dispatch(changeSelectedTab(tabName));
  };
  const { data, isFething } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 10,
  });

  if (isFething) {
    return <Progresbar />;
  }
  return (
    <div className="home_news">
      <div className="home_news_header">
        <h1>Latest Crypto News</h1>
        <button className="show_more">
          {" "}
          <Link to="/news" onClick={() => changeTab("News")}>
            Show More
          </Link>
        </button>
      </div>
      {data?.value && <NewsCard datas={data?.value} />}
    </div>
  );
};

export default HomeNews;
