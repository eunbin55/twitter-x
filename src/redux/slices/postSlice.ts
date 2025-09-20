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

// 포스트 생성
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

// 좋아요 토글
export const toggleLike = createAsyncThunk(
  "posts/toggleLike",
  async (postId: number, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      // 로컬 상태 업데이트
      return { postId };
    } catch (error) {
      return rejectWithValue(error ?? { message: "오류가 발생했습니다." });
    }
  }
);

// 재게시 토글
export const toggleRetweet = createAsyncThunk(
  "posts/toggleRetweet",
  async (postId: number, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      // 로컬 상태 업데이트
      return { postId };
    } catch (error) {
      return rejectWithValue(error ?? { message: "오류가 발생했습니다." });
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
      })
      .addCase(toggleLike.pending, (state) => {
        state.loading = false;
      })
      .addCase(toggleLike.fulfilled, (state, action) => {
        const post = state.posts.find(
          (post) => post.id === action.payload.postId
        );
        if (post) {
          post.isLiked = !post.isLiked;
          post.likes += post.isLiked ? 1 : -1;
        }
      })
      .addCase(toggleLike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as PostError;
      })
      .addCase(toggleRetweet.pending, (state) => {
        state.loading = false;
      })
      .addCase(toggleRetweet.fulfilled, (state, action) => {
        const post = state.posts.find(
          (post) => post.id === action.payload.postId
        );
        if (post) {
          post.isRetweeted = !post.isRetweeted;
          post.retweets += post.isRetweeted ? 1 : -1;
        }
      })
      .addCase(toggleRetweet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as PostError;
      });
  },
});

export default postSlice.reducer;
