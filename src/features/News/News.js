import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import "./news.scss";
//progress bar
import Progresbar from "../../components/ProgresBar/Progresbar";
import NewsCard from "../../components/NewsCard/NewsCard";
import Footer from "../../components/Footer/Footer";

///local storage mantigi eger checkeddirse gelenlerinde checked olmasini istirem Her seferinde selcti degisende
let checkedSortedTimeValue = false;
if (localStorage.getItem("checkedSortedTimeValue")) {
  checkedSortedTimeValue = JSON.parse(
    localStorage.getItem("checkedSortedTimeValue")
  );
}

let bringSelectValue = "Amp";
if (localStorage.getItem("bringSelectValue")) {
  bringSelectValue = JSON.parse(localStorage.getItem("bringSelectValue"));
}
const News = () => {
  const [category, setCategory] = useState(bringSelectValue);
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory: category,
    count: 100,
  });

  //all coins for select option
  const { data: coins } = useGetCryptosQuery(100);

  // //final values sorted or unsorted
  const [timestampDatas, setTimestampsDatas] = useState();
  //check or not
  const [checkSorted, setCheckSorted] = useState(checkedSortedTimeValue);

  useEffect(() => {
    // console.log([...data?.value]);

    if (data) {
      if (checkSorted) {
        let sortedDatas = [...data?.value].sort((a, b) =>
          b.datePublished.localeCompare(a.datePublished)
        );
        setTimestampsDatas(sortedDatas);
      }
    }

    //setting items to local
    localStorage.setItem("checkedSortedTimeValue", JSON.stringify(checkSorted));
    localStorage.setItem("bringSelectValue", JSON.stringify(category));
  }, [data, checkSorted, category]);

  //
  // if (isFetching) {
  //   return <Progresbar style={{ color: "red" }} />;
  // }

  return (
    <div className="news">
      <div className="news_container">
        <div className="select_box">
          <h4>Choice Category</h4>
          <select
            defaultChecked
            className="categories "
            onChange={(e) => setCategory(e.target.value)}
          >
            {/* //take value Destruc and sort then reflect each if them to select  (if check sorted true ) */}
            {coins &&
              coins?.data?.coins
                ?.map((coin) => {
                  return coin.name;
                })
                .sort((a, b) => (a < b ? -1 : 1))
                .slice(1)
                .map((coin, index) => {
                  return (
                    <option
                      key={index}
                      className="option"
                      // selected={selectValue === coin.value}
                      value={coin}
                    >
                      {coin}
                    </option>
                  );
                })}
          </select>
          <label htmlFor="sort" style={{ marginLeft: "2rem" }}>
            Sort By Time
          </label>
          <input
            type="checkbox"
            style={{ marginLeft: "1rem" }}
            name="sort"
            checked={checkSorted}
            onChange={(e) => setCheckSorted(!checkSorted)}
          />
        </div>

        {data ? (
          <NewsCard datas={checkSorted ? timestampDatas : data?.value} />
        ) : (
          <Progresbar />
        )}
      </div>
    </div>
  );
};

export default News;
