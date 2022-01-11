import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../features/data/inputDataSlice";
import userInfoSlice from "../features/userInfo/UserInfoSlice";
import EstimationPrimDataSlice from "../features/estimationPrimData/EstimationPrimDataSlice";

export const store = configureStore({
	reducer: {
		input: inputReducer,
		userInfo: userInfoSlice,
		primaryData: EstimationPrimDataSlice,
	},
});
