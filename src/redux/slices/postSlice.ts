import { Post } from "@/types/post";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsData from "../../../data/posts.json";

interface PostState {
  posts: Post[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  error: string;
}

const initialState: PostState = {
  posts: [],
  page: 1,
  hasMore: true,
  loading: false,
  error: "",
};

// 무한 스크롤용
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (query: { page: number; searchText?: string }, { rejectWithValue }) => {
    try {
      const limit = 10;
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 로딩 시뮬레이션
      const data = postsData.slice(
        (query.page - 1) * limit,
        query.page * limit
      );
      return data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, ...action.payload];
        state.page += 1;
        state.hasMore = action.payload.length > 0;
        state.error = "";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postSlice.reducer;
