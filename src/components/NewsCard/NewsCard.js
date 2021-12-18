import moment from "moment";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
import "./NewsCard.scss";
const NewsCard = ({ datas }) => {
  // console.log(datas);

  let finalValues = datas?.map((each) => {
    const { category, datePublished, name, url, description, provider, image } =
      each;

    const providerNewsName = each.provider[0].name;
    return {
      category,
      datePublished,
      newsName: name,
      newsUrl: url,
      providerNewsName,
      description,
      provider,
      image,
    };
  });
  // console.log(finalValues);
  //   /
  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <div className="home_news_content" data-aos="fade-up">
      {finalValues?.map((data, index) => {
        return (
          <a className="card" key={index} href={data.newsUrl} target="_blank">
            <div className="card_header">
              <div className="card_header_name">{data.newsName}</div>
              <div className="card_header_image">
                <img
                  src={data?.image?.thumbnail?.contentUrl || demoImage}
                  alt="image"
                />
              </div>
            </div>
            <div className="card_desc">
              <p className="price">
                {data.description.length > 100
                  ? `${data.description.substring(0, 100)}...`
                  : data.description}
              </p>
            </div>
            <div className="card_footer">
              <div className="left">
                <img
                  src={
                    data?.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                  }
                  alt={data.providerNewsName}
                />
                <p>{data.providerNewsName}</p>
              </div>
              <div className="right">
                <p className="timestamp">
                  {moment(data.datePublished).startOf("ss").fromNow()}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default NewsCard;
