import Footer from "../../components/Footer/Footer";
import ProgresBar from "../../components/ProgresBar/Progresbar";

import "./style.scss";
import { useGetExchangesQuery } from "../../services/cryptoApi";
import Accordion from "./Accordion";
const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  const accordionData = data?.data?.exchanges?.map((d) => {
    const {
      iconUrl,
      id,
      numberOfMarkets,
      volume,
      name,
      rank,
      lastTickerCreatedAt,
      description,
    } = d;
    return {
      title: {
        image: iconUrl,
        id,
        numberOfMarkets,
        volume,
        name,
        rank,
        lastTickerCreatedAt,
      },
      content: {
        description,
      },
    };
  });

  if (isFetching) {
    return <ProgresBar />;
  }

  return (
    <div className="exchanges">
      <div className="exchanges_container">
        <div className="exchanges_header">
          <p className="exchanges_header_title">Exchanges</p>
          <p className="exchanges_header_title">24h Trade Volume</p>
          <p className="exchanges_header_title">Markets</p>
          <p className="exchanges_header_title">Last Created</p>
        </div>
        {accordionData?.map((data) => {
          return <Accordion data={data} key={data.title.id} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Exchanges;
