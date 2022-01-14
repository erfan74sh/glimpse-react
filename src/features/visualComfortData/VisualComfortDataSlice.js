import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {
		floorLevel: "",
		xDim: 3,
		yDim: 8,
		rotation: 0,
		wwrNorth: 0,
		wwrSouth: 0,
		shadingType: "",
		reflectanCeWall: 0.2,
		reflectanCeCeiling: 0.2,
		reflectanCefloor: 0.2,
		vtGlass: "",
		southNeighborDist: 3,
		southNeighborHeight: 4,
		northNeighborDist: 3,
		northNeighborHeight: 4,
	},
};

export const VisualComfortDataSlice = createSlice({
	name: "visualcomfortData",
	initialState,
	reducers: {
		updateData(state, action) {
			state.data = action.payload;
		},
	},
});

export const { updateData } = VisualComfortDataSlice.actions;
export const selectVisualComfortData = (state) => state.visualComfortData.data;
export default VisualComfortDataSlice.reducer;
