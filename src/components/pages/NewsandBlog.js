import React, { useEffect, useState } from "react";
import axios from "axios";
import News from "../News.css";
import "../../App.css";

export function NewsandBlog() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const res = await axios.get("http://localhost:8800/news");
        setNews(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllNews();
  }, []);

  return (
    <>
      <h1 className="newsandblog">News and Blog</h1>
      <div className="news-container">
        {news.map((news) => (
          <div
            className="newscard"
            key={news.id}
            onClick={() => (window.location.href = news.link)}
          >
            {news.image && <img src={news.image} alt="" />}
            <h2>{news.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
