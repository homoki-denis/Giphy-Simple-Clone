import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// api_key: "KFh9BqStDxyQwQ5ycyZ5xbFhLkh7iCl6"
// https://api.giphy.com/v1/gifs/trending

function Gallery() {
  // States
  const [gallery, setGallery] = useState([]);

  // Effects
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "KFh9BqStDxyQwQ5ycyZ5xbFhLkh7iCl6",
          limit: 20,
        },
      });

      //   console.log(result);
      setGallery(result.data.data);
    };
    fetchData();
  }, []);

  //   console.log(gallery);

  return (
    <div>
      <h1>This is the Gallery</h1>
    </div>
  );
}

export default Gallery;
