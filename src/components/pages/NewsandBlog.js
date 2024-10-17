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
      <div class="article-container">
        {news.map((news) => (
          <a href={news.link} className="article-card" key={news.id}>
            <div class="content">
              <p>{news.title}</p>
              <p>{news.catagary}</p>
            </div>
            {news.image && <img src={news.image} alt={news.title} />}
          </a>
        ))}
      </div>
    </>
  );
}
