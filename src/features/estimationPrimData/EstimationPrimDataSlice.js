import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {
		highPerformanceBuildings: "",
		subset: "",
		buildingProgram: "",
		projectName: "",
		zoneName: "",
		alternativeName: "",
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
