import React, { useState } from "react";
import { ImageListItem, ImageList, ImageListItemBar, TextField } from "@mui/material";
import "./styles.scss";

const GalleryGrid = ({ photosItemsList, colsCount }) => {
  const [filterInput, setFilterInput] = useState("");
  const defaultFilter = val => {
    return val?.user?.username.includes(filterInput);
  }
  console.log(filterInput)
  return (
    <div className="gallery-container">
      <TextField
        label="Search"
        variant="outlined"
        onChange={(e) => setFilterInput(e.target.value)}
        className="custom-search"
      />
      <ImageList variant="masonry" cols={colsCount} gap={8}>
        {photosItemsList.filter(defaultFilter).map((item) => (
          <ImageListItem key={item?.id}>
            <img
              src={item?.urls?.regular}
              srcSet={item?.urls?.regular}
              alt=""
              loading="lazy"
            />
            <ImageListItemBar
              title={`by: ${item?.user?.username}`}
            />
          </ImageListItem>

        ))}
      </ImageList>
    </div>
  );
};

export default GalleryGrid;
