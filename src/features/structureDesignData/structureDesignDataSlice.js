import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {},
};

export const structureDesignDataSlice = createSlice({
	name: "structureDesignData",
	initialState,
	reducers: {
		updateData(state, action) {
			state.data = action.payload;
		},
	},
});

export const { updateData } = structureDesignDataSlice.actions;
export const selectStructureDesignData = (state) =>
	state.structureDesignData.data;
export default structureDesignDataSlice.reducer;
