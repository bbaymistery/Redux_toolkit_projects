import { Link } from "react-router-dom";
import millify from "millify";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";

//icons
import { MdAddTask, MdOutlineRemoveCircleOutline } from "react-icons/md";

//slices
import { changeSelectedTab } from "../../features/LeftNavbar/appNavbarSlice";
import {
  addItemToFavourites,
  removeItemFromFavourites,
} from "../../features/Favourites/appFavouritesSlice";

//selectors
import { selectAddedItemsIds } from "../../features/Favourites/selectors";
function Card({ datas }) {
  // let coins = datas.data.coins;
  const selectAddedItemsIdsForChecking = useSelector(selectAddedItemsIds);
  const dispatch = useDispatch();
  const changeTab = (tabName) => {
    dispatch(changeSelectedTab(tabName));
  };
  console.log(selectAddedItemsIdsForChecking);

  return (
    // the css values on homreTrending page
    <div className="home_trending_content">
      {datas?.map((data, index) => {
        // console.log(data);
        // console.log(selectAddedItemsIdsForChecking.includes(data.id));

        return (
          <div
            //deyirikki eger cart eklenilen ise hafi backraundunu degisdir
            className={`${
              selectAddedItemsIdsForChecking.includes(data.id)
                ? "card added"
                : "card"
            }`}
            key={data.id}
          >
            <Link
              className="detail"
              to={`/crypto/${data.id}`}
              onClick={() => changeTab("")}
            >
              <button className="details_btn">Details</button>
            </Link>
            <div className="card_header">
              <div className="card_header_name">
                {`${index + 1}.`}
                {data.name}
              </div>
              <div> </div>
              <div className="card_header_image">
                <img src={data.iconUrl} alt="image" />
              </div>
            </div>
            <div className="card_desc">
              <p className="price">
                Market_cup:
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {millify(data.marketCap)}
                </span>
              </p>
              <p className="marketCap">
                Current_price:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {millify(data.price)} $
                </span>
              </p>
              <p className="">
                Daily Change:{" "}
                <span className={data.change > 0 ? "green" : "red"}>
                  {" "}
                  {` ${data.change} %`}
                </span>
              </p>
            </div>
            <div className="card_favourites">
              {/* EGER favouritesin icinde yoxdursa add item   varsa remove item */}

              {selectAddedItemsIdsForChecking.includes(data.id) ? (
                <MdOutlineRemoveCircleOutline
                  title="Remove from favourite"
                  className="remove"
                  onClick={() => {
                    dispatch(removeItemFromFavourites(data));
                  }}
                />
              ) : (
                <MdAddTask
                  className="add"
                  title="Add to favourite"
                  onClick={() => {
                    dispatch(addItemToFavourites(data));
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
/*
// let percentage = data.price_change_24h.toFixed(1);
        // if (percentage === "0.00" || percentage === "-0.00") {
        //   percentage = 0;
        // } */

// <MdAddTask
//   className="add"
//   title="Add to favourite"
//   onClick={() => {
//     dispatch(addItemToFavourites(data));
//   }}
// />

{
  /* <MdOutlineRemoveCircleOutline
          title="Remove from favourite"
          className="remove"
          onClick={() => {
            dispatch(removeItemFromFavourites(data));
          }}
        /> */
}
