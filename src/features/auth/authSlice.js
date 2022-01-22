import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";

import authService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const signin = createAsyncThunk(
	"auth/signin",
	async (userInfo, thunkAPI) => {
		try {
			const response = await authService.signIn(userInfo);
			thunkAPI.dispatch(setMessage(response.data.message));
			return response.data;
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const login = createAsyncThunk(
	"auth/login",
	async (userInfo, thunkAPI) => {
		try {
			const data = await authService.logIn(userInfo);
			return { user: data };
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const logout = createAsyncThunk("auth/logout", async () => {
	await authService.logOut();
});

const initialState = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null };

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: {
		[signin.fulfilled]: (state, action) => {
			state.isLoggedIn = false;
		},
		[signin.rejected]: (state, action) => {
			state.isLoggedIn = false;
		},
		[login.fulfilled]: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload.user;
		},
		[login.rejected]: (state, action) => {
			state.isLoggedIn = false;
			state.user = null;
		},
		[logout.fulfilled]: (state, action) => {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
});

const { reducer } = authSlice;
export default reducer;
