import axios from "axios"
import { API_URL } from "./constants";

export const getImages = () => {
  return axios({
    method: "GET",
    url: API_URL,
  });
};
