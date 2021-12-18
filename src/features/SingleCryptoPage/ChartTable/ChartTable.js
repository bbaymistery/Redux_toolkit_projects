import React, { useEffect, useState } from "react";
import "./chartTable.scss";
import { useGetCryptoHistoryQuery } from "../../../services/cryptoApi";
import { useParams } from "react-router";
import millify from "millify";
import Progresbar from "../../../components/ProgresBar/Progresbar";
import LineCart from "../LineCart";
//name ve price historical fetch de gelmediginnen bunnan onceki details fetch ile getirib yazdirix

const ChartTable = ({ name, price, selectValue }) => {
  const { id } = useParams();
  const [hPrices, setHPrices] = useState([]);
  const [hTimeStamps, sethTimeStamps] = useState([]);
  const { data, isFetching } = useGetCryptoHistoryQuery({
    coinId: id,
    timeperiod: selectValue,
  });
  //it is fro green or red color of percent
  const changePercentage = data?.data?.change;
  // degerlerin usesTATE aktarilmasi
  useEffect(() => {
    const timestamps = data?.data?.history?.map((time) => time.timestamp);
    const prices = data?.data?.history?.map((time) => time.price);
    sethTimeStamps(timestamps);
    setHPrices(prices);
  }, [selectValue, data]);

  //loading
  if (isFetching) {
    return <Progresbar />;
  }

  return (
    <div className="chart_table">
      <div className="chart_table_header">
        <p className="title">{name} Chart</p>

        <p className="changes">
          <span>
            Change:
            <span
              className={
                changePercentage > 0 ? "percentage green" : "percentage"
              }
            >
              {data?.data?.change} %
            </span>
          </span>
          <span>
            Current {name} Price:
            <span className="price">{millify(price)}</span>
          </span>
        </p>
      </div>

      <div className="chart_table_table">
        {hTimeStamps && hPrices && (
          <LineCart
            hPrices={hPrices}
            hTimeStamps={hTimeStamps}
            selectValue={selectValue}
          />
        )}
      </div>
    </div>
  );
};

export default ChartTable;
