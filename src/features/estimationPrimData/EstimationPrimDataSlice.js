import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {
		high_performance_building_index: "",
		subset: "",
		building_program: "",
		project_name: "",
		alternative_name: "",
		zone_name: "",
		location: "",
	},
};

export const estimationPrimDataSlice = createSlice({
	name: "primaryData",
	initialState,
	reducers: {
		updateData(state, action) {
			state.data = action.payload;
		},
	},
});

export const { updateData } = estimationPrimDataSlice.actions;
export const selectPrimaryData = (state) => state.primaryData.data;
export default estimationPrimDataSlice.reducer;
