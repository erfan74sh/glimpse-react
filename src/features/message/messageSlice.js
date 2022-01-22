import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const messageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {
		setMessage: (state, action) => {
			return { message: action.payload };
		},
		clearMessage: () => {
			return { message: "" };
		},
	},
});

export const { setMessage, clearMessage } = messageSlice.actions;
export const selectMessage = (state) => state.message;
export default messageSlice.reducer;
