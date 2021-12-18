import React, { useEffect, useState } from "react";
import HtmlParser from "react-html-parser";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import millify from "millify";
import moment from "moment";
import AOS from "aos";
import "aos/dist/aos.css";
const Accordion = ({ data }) => {
  const [isActive, setIsActive] = useState(true);

  //   /
  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <div className="accordion" data-aos="flip-down">
      <div className="accordion-item">
        {/* //title  */}
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="title_name">
            <span>{data.title.rank}</span>
            <img src={data.title.image} alt="" />
            <span>{data.title.name}</span>
          </div>
          <p className="title_volume">{millify(data.title.volume)}</p>
          <p className="markets">{millify(data.title.numberOfMarkets)}</p>
          <p className="change">
            {moment(data?.title?.lastTickerCreatedAt).startOf("ss").fromNow()}
          </p>
          <span className="icon_box">
            {data.content?.description ? (
              isActive ? (
                <AiOutlinePlusCircle className="icon_open" />
              ) : (
                <AiOutlineMinusCircle className="icon_close" />
              )
            ) : (
              ""
            )}
          </span>
        </div>
        {/* content */}
        <div
          className={`${
            isActive ? "accordion-content animate" : "accordion-content"
          }`}
        >
          {HtmlParser(data.content.description)}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

//   <p>
//     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//     Laborum consectetur porro sint. Accusantium, cumque? Aliquam
//     quam libero ut voluptatibus dicta blanditiis cum voluptatem
//     illo, eaque aliquid illum enim nam harum! Provident ullam ea
//     explicabo iure impedit, dolores officiis vitae exercitationem,
//     fugit doloremque dicta. Eos voluptates nisi dicta, recusandae
//     quae quaerat ut esse ducimus expedita doloremque officia! Enim
//     commodi nobis fugit perspiciatis.
//   </p>
//   <p>
//     fugit doloremque dicta. Eos voluptates nisi dicta, recusandae
//     quae quaerat ut esse ducimus expedita doloremque officia! Enim
//     commodi nobis fugit perspiciatis. Lorem ipsum dolor sit amet
//     consectetur, adipisicing elit. Laborum consectetur porro sint.
//     Accusantium, cumque? Aliquam quam libero ut voluptatibus dicta
//     blanditiis cum voluptatem illo, eaque aliquid illum enim nam
//     harum! Provident ullam ea explicabo iure impedit, dolores
//     officiis vitae exercitationem, fugit doloremque dicta. Eos
//     voluptates nisi dicta, recusandae quae quaerat ut esse ducimus
//     expedita doloremque officia! Enim commodi nobis fugit
//     perspiciatis.
//   </p>
//   <h2>Binance Coin (BNB)</h2>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Pariatur nulla natus veniam? Blanditiis mollitia voluptates quas
//     placeat libero. Perferendis, quo!
//   </p>
