import React from "react";
import "./newsLink.scss";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const NewsLink = ({ data }) => {
  const html = data?.data?.coin?.description;
  let links = data?.data?.coin?.links;
  return (
    <div className="newsLink">
      <div className="left box">
        <h2 className="title ">
          What is <span>{data?.data?.coin?.name} ?</span>
        </h2>
        {ReactHtmlParser(html)}
      </div>
      <div className="right box">
        <h2 className="title">{data?.data?.coin?.name} Links</h2>

        <div className="links">
          <ul>
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <span className="crypto_name">{link.type}</span>
                  <a href={link.url} target="_blank" className="crypto_url">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsLink;
