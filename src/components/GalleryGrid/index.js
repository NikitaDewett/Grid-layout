import React from "react";
import { ImageListItem, ImageList } from "@mui/material";
import "./styles.scss";

const GalleryGrid = ({photosItemsList}) => {
  console.log(photosItemsList)
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {photosItemsList.map((item) => (
        <ImageListItem key={item?.id}>
          <img
            src={item?.urls?.regular}
            srcSet={item?.urls?.small}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GalleryGrid;
