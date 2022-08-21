import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// api_key: "KFh9BqStDxyQwQ5ycyZ5xbFhLkh7iCl6"
// https://api.giphy.com/v1/gifs/trending
// https://api.giphy.com/v1/gifs/search

function Gallery() {
  // States
  // const [gifs, setGifs] = useState([]);
  // const [links, setLinks] = useState("");

  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState([]);

  // Effects
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "KFh9BqStDxyQwQ5ycyZ5xbFhLkh7iCl6",
          limit: 30,
        },
      });

      //   console.log(result);
      setGallery(result.data.data);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("Gifs", JSON.stringify(gifs));
  // }, [gifs]);

  // console.log(gallery);

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

  // const handleLinks = (e) => {
  //   setLinks(e.target.value);
  // };

  // console.log(links);

  // const saveLinks = (e) => {
  //   e.preventDefault();
  //   setGifs(links);
  //   setLinks("");
  // };

  const activeHandler = (url) => {
    if (active.includes(url)) {
      setActive(active.filter((prevActive) => prevActive !== url));
    } else {
      setActive((prevActive) => [...prevActive, url]);
    }

    localStorage.setItem("Gifs", JSON.stringify(active));
  };

  console.log(active);

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
        {gallery.map((img, index) => (
          <div>
            <img src={img.images.fixed_height.url} key={index} />
            <div className="gallery-imgs-subtitle">
              <span>{img.title.split(" ").slice(0, 3).join(" ")}</span>
              <span>
                <i
                  onClick={() => activeHandler(img.url)}
                  className={`fa-solid fa-thumbs-up fa-lg ${
                    active.includes(img.url) ? "active" : "inactive"
                  }`}
                ></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
