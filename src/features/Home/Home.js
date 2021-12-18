import "aos/dist/aos.css";
import aos from "aos";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
//components
import HomeHeader from "./HomeHeader";
import HomeNews from "./HomeNews";
import HomeTrending from "./HomeTrending";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    aos.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression
      duration: 2500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <div className="home">
      <div className="home_container">
        <HomeHeader />
        <HomeTrending />
        <HomeNews />
      </div>
      {<Footer data-aos="flip-down" />}
    </div>
  );
};

export default Home;
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { HTTP_STATUS } from "../../app/constants";
// import { getTotalValues, selectLoadingStatus } from "./globalSliceInfoApi";
// import Loading from "../../components/Loading/Loading";
// const dispatch = useDispatch();
// const loading = useSelector(selectLoadingStatus);
// useEffect(() => {
//   dispatch(getTotalValues());
// }, []);
// if (loading === HTTP_STATUS.PENDING) {
//   return <Loading />;
// }
