import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {
		x_dim: 3,
		y_dim: 8,
		rotation_angle: 0,
		wwr_north: 0,
		wwr_south: 0,
		shading_type: "",
		reflectance_wall: 0.2,
		reflectance_celing: 0.2,
		reflectance_floor: 0.2,
		vt_glass: "",
		south_neighbor_distance: 3,
		south_neighbor_height: 4,
		north_neighbor_distance: 3,
		north_neighbor_height: 4,
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
