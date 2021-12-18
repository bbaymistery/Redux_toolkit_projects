import React, { useEffect, useState } from "react";
import "./singleCrypto.scss";
import { useParams } from "react-router";
import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import { chartDays } from "../../app/data";

//components inside foder
import CryptoValues from "./CryptoValues/CryptoValues";
import Footer from "../../components/Footer/Footer";
import ChartTable from "./ChartTable/ChartTable";
import NewsLink from "./NewsLink/NewsLink";
import Loading from "../../components/Loading/Loading";
//
//set value to selct value as a default
let valueForSelectValue = "7d";
if (localStorage.getItem("valueForSelectValue")) {
  valueForSelectValue = JSON.parse(localStorage.getItem("valueForSelectValue"));
}

//
const SingleCrypto = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(id);
  const [selectValue, setSelectValue] = useState(valueForSelectValue);
  const name = data?.data?.coin.name;
  const price = data?.data?.coin.price;

  useEffect(() => {
    localStorage.setItem("valueForSelectValue", JSON.stringify(selectValue));
  }, [selectValue]);
  //
  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="single_crypto">
      <div className="single_crypto_container">
        <div className="single_crypto_header">
          <h2 className="main_header_text">
            {data?.data?.coin?.name} ({data?.data.coin?.slug}) Price
          </h2>
          <p className="desc_header_text">
            {data?.data?.coin?.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </div>
        <div className="single_crypto_select">
          <select
            className="chartdays "
            onChange={(e) => setSelectValue(e.target.value)}
          >
            {chartDays?.map((day, index) => {
              return (
                <option
                  key={index}
                  className="option"
                  selected={selectValue === day.value}
                  value={day.value}
                >
                  {day.label}
                </option>
              );
            })}
          </select>
        </div>
        <ChartTable name={name} price={price} selectValue={selectValue} />
        <CryptoValues data={data} />
        <NewsLink data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default SingleCrypto;
