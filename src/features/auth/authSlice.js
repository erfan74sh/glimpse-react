import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";

import authService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

console.log(user);
export const signin = createAsyncThunk(
	"auth/signin",
	async (userInfo, thunkAPI) => {
		try {
			const response = await authService.signUp(userInfo);
			thunkAPI.dispatch(setMessage("ثبت‌نام شما با موفقیت انجام شد"));
			console.log(response);
			return response.data;
		} catch (error) {
			let message;
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				// todo: remove console.logs
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				message = error.response.data.detail;
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
				message = error.request;
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log("Error", error.message);
				message = error.message;
			}
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const login = createAsyncThunk(
	"auth/login",
	async (userInfo, thunkAPI) => {
		try {
			await authService.logIn(userInfo);
			const data = await authService.getCurrentUser();
			localStorage.setItem("user", JSON.stringify(data));
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
export const selectUser = (state) => state.auth;
export default reducer;