import React from "react";
import "./values.scss";
import millify from "millify";

//icons
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { RiFlashlightLine } from "react-icons/ri";
import { HiCurrencyDollar } from "react-icons/hi";
import { FaMedal } from "react-icons/fa";
import { AiOutlineFund } from "react-icons/ai";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { TiSupport } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";
import { CgMathMinus } from "react-icons/cg";
const CryptoValues = ({ data }) => {
  return (
    <div className="single_crypto_values">
      <div className="box left">
        <div className="header">
          <h2 className="title">{data?.data?.coin?.name} Value Statistics</h2>
          <p className="desc">
            An overview showing the statistics of{" "}
            <span style={{ fontWeight: "bold" }}>{data?.data?.coin?.name}</span>
            , such as the base and quote currency, the rank, and trading volume.
          </p>
        </div>

        <div className="box_list">
          <ul>
            <li>
              <div className="box_left">
                <AiOutlineDollarCircle className="icon" />
                <p>Price To USD</p>
              </div>
              <p className="box_right">$ {millify(data?.data?.coin?.price)}</p>
            </li>
            <li>
              <div className="box_left">
                <BiHash className="icon" />
                <p>Rank</p>
              </div>
              <p className="box_right">{data?.data?.coin?.rank}</p>
            </li>
            <li>
              <div className="box_left">
                <RiFlashlightLine className="icon" />
                <p>24h Volume</p>
              </div>
              <p className="box_right">$ {millify(data?.data?.coin?.volume)}</p>
            </li>
            <li>
              <div className="box_left">
                <HiCurrencyDollar className="icon" />
                <p>Market Cap</p>
              </div>
              <p className="box_right">
                $ {millify(data?.data?.coin?.marketCap)}
              </p>
            </li>
            <li>
              <div className="box_left">
                <FaMedal className="icon" />
                <p>All-time-high(daily avg.)</p>
              </div>
              <p className="box_right">
                $ {millify(data?.data?.coin?.allTimeHigh?.price)}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className=" box right">
        <div className="header">
          <h2 className="title">Other Stats Info</h2>
          <p className="desc">
            An overview showing the statistics of{" "}
            <span style={{ fontWeight: "bold" }}>{data?.data?.coin?.name}</span>
            , such as the base and quote currency, the rank, and trading volume.
          </p>
        </div>

        {/* other stats  */}
        <div className=" box_list">
          <ul>
            <li>
              <div className="box_left">
                <AiOutlineFund className="icon" />
                <p>Number Of Markets</p>
              </div>
              <p className="box_right">
                {millify(data?.data?.coin?.numberOfMarkets)}
              </p>
            </li>
            <li>
              <div className="box_left">
                <AiOutlineMoneyCollect className="icon" />
                <p>Number Of Exchanges</p>
              </div>
              <p className="box_right">{data?.data?.coin?.numberOfExchanges}</p>
            </li>
            <li>
              <div className="box_left">
                <AiOutlineExclamationCircle className="icon" />
                <p>Aprroved Supply</p>
              </div>
              <p className="box_right">
                {data?.data?.coin?.approvedSupply ? (
                  <BsCheck />
                ) : (
                  <CgMathMinus />
                )}
              </p>
            </li>
            <li>
              <div className="box_left">
                <TiSupport className="icon" />
                <p>Total Supply</p>
              </div>
              <p className="box_right">
                $ {millify(data?.data?.coin?.totalSupply)}{" "}
              </p>
            </li>
            <li>
              <div className="box_left">
                <AiOutlineExclamationCircle className="icon" />
                <p>Curcilating Supply</p>
              </div>
              <p className="box_right">
                $ {millify(data?.data?.coin?.circulatingSupply)}{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CryptoValues;
