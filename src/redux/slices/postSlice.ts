import { Post } from "@/types/post";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsData from "../../../data/posts.json";

interface PostError {
  message: string;
}
interface PostState {
  posts: Post[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  error: PostError | null;
}

const initialState: PostState = {
  posts: [],
  page: 1,
  hasMore: true,
  loading: false,
  error: null,
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
    } catch (error) {
      return rejectWithValue(
        error ?? { message: "게시물 가져오기 중 오류가 발생했습니다." }
      );
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post: Post, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 포스트 시뮬레이션
      return post;
    } catch (error) {
      return rejectWithValue(
        error ?? { message: "게시하기 중 오류가 발생했습니다." }
      );
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
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as PostError;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [action.payload, ...state.posts];
        state.error = null;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as PostError;
      });
  },
});

export default postSlice.reducer;
