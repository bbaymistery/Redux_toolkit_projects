import React from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin7Line } from "react-icons/ri";
import "./styles.scss";
import millify from "millify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BsArrowRightShort } from "react-icons/bs";
//slices
import { changeSelectedTab } from "../LeftNavbar/appNavbarSlice";
import {
  clearAllitems,
  removeItemFromFavourites,
  setAlert,
} from "./appFavouritesSlice";
//seelctors
import {
  selectAlert,
  selectClassName,
  selectFavouritesItems,
  selectMessage,
} from "./selectors";
const Favourites = () => {
  //selectors
  const selectedFavourites = useSelector(selectFavouritesItems);
  const selectedAlert = useSelector(selectAlert);
  const selectedClassName = useSelector(selectClassName);
  const selectedMessage = useSelector(selectMessage);
  const dispatch = useDispatch();
  const changeTab = (tabName) => {
    dispatch(changeSelectedTab(tabName));
  };
  console.log(selectedClassName);

  return (
    <div className="favourites_content">
      <div className="container">
        {selectedAlert ? (
          <div className={selectedAlert ? "alert_box show" : "alert_box"}>
            <p className={selectedClassName ? `${selectedClassName}` : ""}>
              {selectedMessage}
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="header">
          <a
            className="clear_all btn"
            onClick={() => {
              dispatch(clearAllitems());
              dispatch(
                setAlert({
                  message: "All items  deleted",
                  className: "red",
                  alert: true,
                })
              );
              setTimeout(() => {
                dispatch(
                  setAlert({ message: "", className: "", alert: false })
                );
              }, 1000);
            }}
          >
            Clear All
          </a>
          <Link
            to="/cryptocurrencies"
            className="link btn"
            onClick={() => changeTab("Cryptocurrencies")}
          >
            Go to Cryptocurrencies
          </Link>
        </div>
        {selectedFavourites.length === 0 && (
          <p className="empty">
            Your list is empty{" "}
            <span>
              <BsArrowRightShort className="icon" />
            </span>
          </p>
        )}
        {selectedFavourites && (
          <div className="favourite_cards">
            {selectedFavourites?.map((item, index) => {
              return (
                <div className="card" key={item.id}>
                  <p className="cardName">{`${index + 1}.  ${item.name}`}</p>

                  <p className="symbol">{item.symbol}</p>

                  <p className="price">{millify(item.price)} $ </p>

                  <p
                    className={item.change > 0 ? "change green" : "change red"}
                  >
                    {item.change} %
                  </p>

                  <div>
                    <RiDeleteBin7Line
                      className="delete_btn"
                      onClick={() => {
                        dispatch(removeItemFromFavourites(item));
                        dispatch(
                          setAlert({
                            message: `${item.name} is delted`,
                            className: "red",
                            alert: true,
                          })
                        );
                        setTimeout(() => {
                          dispatch(
                            setAlert({
                              message: "",
                              className: "",
                              alert: false,
                            })
                          );
                        }, 1000);
                      }}
                    />
                  </div>

                  <Link
                    to={`/crypto/${item.id}`}
                    onClick={() => changeTab("")}
                    className="details_btn"
                  >
                    Details
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;

// <Link to="">
//   <button className="details_btn btn">Details</button>
// </Link>
