import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await api.get("/article");
  return response.data.data;
});
