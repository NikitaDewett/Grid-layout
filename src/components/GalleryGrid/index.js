import React, { useState } from "react";
import { ImageListItem, ImageList, ImageListItemBar, TextField } from "@mui/material";
import "./styles.scss";

const GalleryGrid = ({ photosItemsList }) => {
  const [filterInput, setFilterInput] = useState("");
  const defaultFilter = val => {
    return val?.user?.username.includes(filterInput);
  }
  console.log(filterInput)
  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        onChange={(e) => setFilterInput(e.target.value)}
      />
      <ImageList variant="masonry" cols={3} gap={8}>
        {photosItemsList.filter(defaultFilter).map((item) => (
          <ImageListItem key={item?.id}>
            <img
              src={item?.urls?.regular}
              srcSet={item?.urls?.small}
              alt=""
              loading="lazy"
            />
            <ImageListItemBar
              title={`by: ${item?.user?.username}`}
            />
          </ImageListItem>

        ))}
      </ImageList>
    </>
  );
};

export default GalleryGrid;
