import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import GalleryGrid from "../../components/GalleryGrid";
import Loader from "../../components/Loader";

import { getImages } from "../../helpers/api";

import "./styles.scss";

const Gallery = () => {
  const [isLoading, setLoading] = useState(false);
  const [photosItemsList, setPhotosItemsList] = useState([]);
  const [clientWidth, setClientWidth] = useState(document?.documentElement?.clientWidth);
  
  window.onresize = () => setClientWidth(document.documentElement.clientWidth);

  const loadImages = () => {
    setLoading(true);
    getImages()
      .then((res) => {
        setLoading(false);
        setPhotosItemsList(res?.data);
      })
      .catch((err) => {
        setLoading(false);
      })
  };

  const calcColsCount = () => {
    if(clientWidth > 820){
      return 3;
    } else if(clientWidth >= 768){
      return 2;
    } else {
      return 1;
    }
  }

  useEffect(() => {
    loadImages();
  }, [])

  console.log(photosItemsList)

  return (
    <>
      {isLoading && <Loader absolute />}
      <div className="gallery">
          <GalleryGrid photosItemsList={photosItemsList} colsCount={calcColsCount()}/>
      </div>
    </>
  );
};

export default Gallery;
