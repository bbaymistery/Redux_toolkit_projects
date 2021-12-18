import { Link } from "react-router-dom";
import Card from "../../components/TrendingCard/TrendCard";
import Loading from "../../components/Loading/Loading";
import { useGetCryptosQuery } from "../../services/cryptoApi";

import { changeSelectedTab } from "../LeftNavbar/appNavbarSlice";
import { useDispatch } from "react-redux";

const HomeTrending = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  //directing to the home page selecting
  const dispatch = useDispatch();

  const changeTab = (tabName) => {
    dispatch(changeSelectedTab(tabName));
  };
  if (isFetching) {
    return <Loading />;
  }
  let newdata = data.data.coins.filter((coin) => coin); //stas ve base den arndilmis sekilde gonderik Cryptocurrencies de search edende de arndirilmis sekilde gonderiyoruz Yani ordaki handleSearch funksiyasiyla arindiriyoruz burdada arindirmak zorundayiz
  // console.log(newdata);

  return (
    <div className="home_trending">
      <div className="home_trending_header">
        <h1>Top 10 Cryptos In The World</h1>
        <button className="show_more">
          {" "}
          <Link
            to="/Cryptocurrencies"
            onClick={() => changeTab("Cryptocurrencies")}
          >
            Show More
          </Link>
        </button>
      </div>
      <Card datas={newdata} />
      <hr />
    </div>
  );
};

export default HomeTrending;
/** */
