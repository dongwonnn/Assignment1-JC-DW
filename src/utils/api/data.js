import axios from "axios";
import { BASE_URL, END_POINT, LIMIT } from "utils/constants";

axios.defaults.baseURL = BASE_URL;

export const fetchCommentAPI = (page) =>
  axios.get(`/${END_POINT}?_page=${page}&_limit=${LIMIT}`);
