import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../features/data/inputDataSlice";

export const store = configureStore({
	reducer: {
		input: inputReducer,
	},
});
