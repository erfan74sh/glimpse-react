import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../features/data/inputDataSlice";
import userInfoSlice from "../features/userInfo/UserInfoSlice";

export const store = configureStore({
	reducer: {
		input: inputReducer,
		userInfo: userInfoSlice,
	},
});
