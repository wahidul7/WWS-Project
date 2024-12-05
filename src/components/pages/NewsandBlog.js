import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import "../News.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function NewsandBlog() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredNews = news.filter((newsItem) =>
    newsItem.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="newsandblog">News and Blog</h1>{" "}
      <div className="search-bar">
        {" "}
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />{" "}
        <i className="fas fa-search icon"></i> {/* Font Awesome Search Icon */}{" "}
      </div>{" "}
      <div className="article-container">
        {filteredNews.map((newsItem) => (
          <a
            href={newsItem.link}
            className="article-card"
            key={newsItem.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content">
              <p className="category">{newsItem.category}</p>
              <p className="title">{newsItem.title}</p>
            </div>
            {newsItem.image && (
              <img src={newsItem.image} alt={newsItem.title} />
            )}
          </a>
        ))}
      </div>
    </>
  );
}
