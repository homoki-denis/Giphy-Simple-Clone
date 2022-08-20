import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// api_key: "KFh9BqStDxyQwQ5ycyZ5xbFhLkh7iCl6"
// https://api.giphy.com/v1/gifs/trending
// https://api.giphy.com/v1/gifs/search

function Gallery() {
  // States
  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState("");

  // Effects
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "KFh9BqStDxyQwQ5ycyZ5xbFhLkh7iCl6",
          limit: 50,
        },
      });

      //   console.log(result);
      setGallery(result.data.data);
    };
    fetchData();
  }, []);

  console.log(gallery);

  // Functions

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  //   console.log(search);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "KFh9BqStDxyQwQ5ycyZ5xbFhLkh7iCl6",
        q: search,
        limit: 10,
      },
    });

    setGallery(result.data.data);
  };

  return (
    <div className="gallery">
      <h1>Giphy Simple Clone</h1>

      <form>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search GIFs"
        />
        <button onClick={handleSubmit}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <h2>
        <i className="fa-solid fa-arrow-trend-up"></i> Trending
      </h2>
      <div className="gallery-imgs">
        {gallery.map((imgs, index) => (
          <div>
            <img src={imgs.images.fixed_height.url} key={index} />
            <div className="gallery-imgs-subtitle">
              <span>{imgs.title.split(" ").slice(0, 3).join(" ")}</span>
              <span>
                <a href={imgs.url} target="_blank">
                  Download
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
