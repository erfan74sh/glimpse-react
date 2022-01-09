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
		eastWallCondition: "",
		westWallCondition: "",
		northWallCondition: "",
		southWallCondition: "",
		roofCondition: "",
		floorCondition: "",
		wallMaterial: 0,
		ceilingMaterial: 0,
		floorMaterial: 0,
		glassMaterial: 0,
		southNeighborDist: 3,
		southNeighborHeight: 4,
		northNeighborDist: 3,
		northNeighborHeight: 4,
		HVAC: "",
		naturalVent: null,
	},
};

export const inputDataSlice = createSlice({
	name: "input",
	initialState,
	reducers: {
		updateData(state, action) {
			state.data = action.payload;
		},
	},
});

export const { updateData } = inputDataSlice.actions;
export const selectInput = (state) => state.input.data;
export default inputDataSlice.reducer;
