//react stuff
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiStar } from "react-icons/fi";
//my stuf
import "./navbar.scss";
import Logo from "../../images/cryptocurrency.png";
import { listNavbar } from "../../app/data";
//selectors
import { selectActiveTab } from "./selectors";
import { selectFavouritesItems } from "../Favourites/selectors";

//slicess
import { changeSelectedTab } from "./appNavbarSlice";
//components

const Navbar = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector(selectActiveTab);

  //we r gonna take the length of this items to show off how many items we have
  const addedFavouritesItems = useSelector(selectFavouritesItems);
  const changeTab = (tabName) => {
    dispatch(changeSelectedTab(tabName));
  };
  console.log(addedFavouritesItems);

  return (
    <>
      <div className="navbar">
        <div className="navbar_container">
          <div className="navbar_logo">
            <img src={Logo} alt="logo" />
            <Link to="/" onClick={() => changeTab("Home")}>
              CryptoVerse
            </Link>

            <div className="favourites">
              <Link to="/favourites">
                <FiStar
                  className="favourites_icon"
                  onClick={() => changeTab("Favourites")}
                />
                <span>{addedFavouritesItems.length}</span>
              </Link>
            </div>
          </div>
          <div className="navbar_list">
            <ul>
              {listNavbar.map((list) => {
                return (
                  <li
                    to={`${list.link}`}
                    className="name"
                    key={list.name}
                    className={selectedTab === list.name ? "active" : " "}
                  >
                    <Link
                      to={`${list.link}`}
                      className="name"
                      onClick={() => changeTab(list.name)}
                    >
                      <span className="icon">{list.icon}</span>
                      {list.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
