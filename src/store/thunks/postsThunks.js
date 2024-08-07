import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { formatPostDate } from "../../utils/dates";
import moment from "moment";
export const fetchPosts = createAsyncThunk("fetchPosts", async (params) => {
  const startTime = moment();

  const response = await api.get("/article", {
    params,
  });

  const posts = await response.data.data.map((article) => {
    return {
      ...article,
      created_at: formatPostDate(article.created_at),
    };
  });

  const endTime = moment();
  const intervalMilliseconds = endTime.diff(startTime);
  const intervalSeconds = (intervalMilliseconds / 1000).toFixed(2);

  return {
    data: posts,
    total: response.data.total,
    lastPage: response.data.last_page,
    interval: intervalSeconds,
  };
});

export const getPost = createAsyncThunk("getPost", async (id) => {
  const response = await api.get(`/article/${id}`);
  console.log("getpost", response.data.data);

  const post = {
    ...response.data.data,
    created_at: formatPostDate(response.data.data.created_at),
    comments:
      response.data.data.comments.map((data) => {
        return { ...data, created_at: data.created_at };
      }) || [],
  };

  return post;
});

export const fetchUserPosts = createAsyncThunk("fetchUserPosts", async (id) => {
  const response = await api.get(`/article/user/${id}`);
  return response.data.data.map((article) => {
    return {
      ...article,
      created_at: formatPostDate(article.created_at),
    };
  });
});
