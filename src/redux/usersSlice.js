import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestUsers, updateUser } from "./usersAPI";

export const fetchUsers = createAsyncThunk(
  "/users/getUsers",
  async (_, thunkAPI) => {
    try {
      const users = await requestUsers();
      return users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const putUsers = createAsyncThunk(
  "/users/updateUsers",
  async (updUserData, thunkAPI) => {
    try {
      const users = await updateUser(updUserData);
      return users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isLoading: false,
  },
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.users = [...payload];
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(putUsers.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(putUsers.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.users.map((user) => {
          if (user.id === payload.id) {
            user.isFollowed = payload.isFollowed;
            user.followers = payload.followers;
          }
          return user;
        });
      })
      .addCase(putUsers.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const usersReducer = usersSlice.reducer;
