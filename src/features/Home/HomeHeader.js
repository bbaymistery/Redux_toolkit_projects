import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loading from "../../components/Loading/Loading";
import millify from "millify";
const HomeHeader = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data.stats;
  // console.log(data);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="home_header">
      <h1>Global Crypto Stats</h1>
      <div className="home_header_values">
        <div className="left">
          <div className="">
            <p className="text">Total Cryptocurrencies</p>
            <p className="desc">{globalStats?.total}</p>
          </div>
          <div className="">
            <p className="text">Total Market Cap</p>
            <p className="desc">{millify(globalStats?.totalMarketCap)}</p>
          </div>
          <div className="">
            <p className="text">Total Markets</p>
            <p className="desc">{millify(globalStats?.totalMarkets)}</p>
          </div>
        </div>
        <div className="right">
          <div className="">
            <p className="text"> Exchanges</p>
            <p className="desc">{millify(globalStats?.totalExchanges)}</p>
          </div>
          {/* <div className="">
            <p className="text">Markets</p>
            <p className="desc">selectedDatas.markets</p>
          </div> */}
          <div className="">
            <p className="text">24h Volume </p>
            <p className="desc">{millify(globalStats.total24hVolume)}</p>
          </div>
        </div>
      </div>
      <hr style={{ color: "gray" }} />
    </div>
  );
};

export default HomeHeader;
