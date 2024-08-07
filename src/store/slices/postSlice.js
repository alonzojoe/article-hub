import { createSlice, current } from "@reduxjs/toolkit";
import { fetchPosts, getPost, fetchUserPosts } from "../thunks/postsThunks";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    currentPage: 1,
    items: [],
    total_items: 0,
    interval: 0,
    isLoading: false,
    error: null,
    post: {},
    lastPage: 0,
    postLoader: false,
    postError: null,
  },
  reducers: {
    setPost(state) {
      state.items = [];
    },
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
    incrementCurrentPage(state) {
      state.currentPage += 1;
    },
    upVote(state, actions) {
      const { voteDetails } = actions.payload;
      const postIndex = state.items.findIndex(
        (item) => item.id === voteDetails.article_id
      );

      if (postIndex !== -1) {
        const existingVoteIndex = state.items[postIndex].votes.findIndex(
          (vote) => vote.user_id === voteDetails.user_id
        );

        if (existingVoteIndex === -1) {
          state.items[postIndex].votes.push(voteDetails);
        }
      }
    },
    downVote(state, actions) {
      const { voteDetails } = actions.payload;
      const postIndex = state.items.findIndex(
        (item) => item.id === voteDetails.article_id
      );

      if (postIndex !== -1) {
        state.items[postIndex].votes = state.items[postIndex].votes.filter(
          (vote) => vote.user_id !== voteDetails.user_id
        );
      }
    },
    addComments(state, actions) {
      const { article_id } = actions.payload.comment;
      const postIndex = state.items.findIndex((item) => item.id === article_id);
      if (postIndex !== -1) {
        state.items[postIndex].comments.unshift(actions.payload.comment);
      }

      state.post.comments.unshift(actions.payload.comment);
    },
    removePost(state, actions) {
      const { id } = actions.payload.post;

      state.items = state.items.filter((item) => item.id !== id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, actions) => {
        console.log("actions", actions.payload);
        state.isLoading = false;
        state.items = [...state.items, ...actions.payload.data];
        state.total_items = actions.payload.total;
        state.interval = actions.payload.interval;
        state.lastPage = actions.payload.lastPage;
      })
      .addCase(fetchPosts.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions?.error?.message || "error";
      })
      .addCase(getPost.pending, (state) => {
        state.postLoader = true;
      })
      .addCase(getPost.fulfilled, (state, actions) => {
        state.postLoader = false;
        state.post = actions.payload;
      })
      .addCase(getPost.rejected, (state, actions) => {
        state.postLoader = false;
        state.postError = state.error = actions?.error?.message || "error";
      })
      .addCase(fetchUserPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserPosts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.items = actions.payload;
      })
      .addCase(fetchUserPosts.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions?.error?.message || "error";
      });
  },
});

export const postActions = postsSlice.actions;
export default postsSlice;
