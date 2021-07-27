import client from "./client";

export const fetchCommentAPI = (page) =>
  client.get(`/comments?_page=${page}&_limit=10`);
