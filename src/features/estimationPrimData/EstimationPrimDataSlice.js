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

export const EstimationPrimDataSlice = createSlice({
	name: "PrimaryData",
	initialState,
	reducers: {
		updateData(state, action) {
			state.data = action.payload;
		},
	},
});
