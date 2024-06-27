import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { formatPostDate } from "../../utils/dates";
export const viewPost = createAsyncThunk("viewPost", async (id) => {
  const response = await api.get(`/article/${id}`);
  return response.data.data.map((post) => {
    return { ...post, created_at: formatPostDate(article.created_at) };
  });
});
