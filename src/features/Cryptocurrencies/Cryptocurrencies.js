import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Progresbar from "../../components/ProgresBar/Progresbar";
import TrendingCard from "../../components/TrendingCard/TrendCard";
import "./CryptoCurrencies.scss";
import { IoMdSearch } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
const Cryptocurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery(100);
  const [searchValue, setSearchValue] = useState("");

  if (isFetching) {
    return <Progresbar />;
  }

  const handleSearch = () => {
    if (searchValue) {
      let filtered = data.data.coins.filter((coin) => {
        return (
          coin.name.toLowerCase().includes(searchValue) ||
          coin.name.toUpperCase().includes(searchValue)
        );
      });
      return filtered;
    } else {
      let filtered = data.data.coins.filter((coin) => {
        return coin;
      });
      return filtered;
    }
  };

  return (
    <div className="cryptocurrencies">
      <div className="search">
        <div className="form">
          <input
            type="text"
            name="text"
            autoComplete="off"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <label htmlFor="text" className="label-name">
            <span className="content-name">Search..</span>
          </label>
          <IoMdSearch className="searchIcon" />
        </div>
      </div>

      <TrendingCard datas={handleSearch()} />
      <Footer />
    </div>
  );
};

export default Cryptocurrencies;
{
  /* <input
          type="text"
          placeholder="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        /> */
}
