import { ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import GalleryGrid from "../../components/GalleryGrid";
import Loader from "../../components/Loader";

import { getImages } from "../../helpers/api";

import "./styles.scss";

const Gallery = () => {
  const [isLoading, setLoading] = useState(false);
  const [photosItemsList, setPhotosItemsList] = useState([]);

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

  useEffect(() => {
    loadImages();
  }, [])

  console.log(photosItemsList)

  return (
    <>
      {isLoading && <Loader absolute />}
      <div className="gallery">
        <GalleryGrid photosItemsList={photosItemsList}/>
      </div>
    </>
  );
};

export default Gallery;
