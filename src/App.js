import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
//features
import {
  Cryptocurrencies,
  Exchanges,
  Home,
  Navbar,
  News,
  SingleCrypto,
  Favourites,
} from "./features";
//images

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:id" element={<SingleCrypto />} />
          <Route path="/news" element={<News />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*
  // window.addEventListener("scroll", (e) => {
  // console.log();
  // console.log(window.pageYOffset);
  //   if (window.pageYOffset >= 755) {
  //     document.querySelector(".go_to_top_icon").className =
  //       "animate go_to_top_icon";
  //   } else {
  //     document.querySelector(".go_to_top_icon").className = "go_to_top_icon";
  //     document.querySelector(".go_to_top_icon").style.opacity = 0;
  //   }
  // });
 <div className="go_to_top_icon">
        <HiArrowNarrowUp
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
*/
