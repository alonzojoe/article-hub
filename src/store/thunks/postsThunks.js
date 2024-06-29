import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { formatPostDate } from "../../utils/dates";
export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await api.get("/article");
  return response.data.data.map((article) => {
    return {
      ...article,
      created_at: formatPostDate(article.created_at),
    };
  });
});

export const getPost = createAsyncThunk("getPost", async (id) => {
  const response = await api.get(`/article/${id}`);
  console.log("getpost", response.data.data);

  const post = {
    ...response.data.data,
    created_at: formatPostDate(response.data.data.created_at),
    comments:
      response.data.data.comments.map((data) => {
        return { ...data, created_at: formatPostDate(data.created_at) };
      }) || [],
  };

  return post;
});
