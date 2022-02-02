import React from "react";
import { CircularProgress } from "@mui/material";
import "./styles.scss";

const Loader = ({ absolute, size = 40 }) => (
  <CircularProgress
    size={size}
    className={`custom-loader ${absolute ? "absolute" : ""}`}
    {...(absolute && size
      ? {
          style: {
            top: `calc(50% - ${size / 2}px)`,
            left: `calc(50% - ${size / 2}px)`
          }
        }
      : {})}
  />
);

export default Loader;
