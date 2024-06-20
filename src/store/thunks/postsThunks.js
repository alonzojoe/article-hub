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
