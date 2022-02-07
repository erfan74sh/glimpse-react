import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {
		// floorLevel: "",
		// xDim: 3,
		// yDim: 8,
		// rotation: 0,
		// wwrNorth: 0,
		// wwrSouth: 0,
		// shadingType: "",
		// eastWallCondition: "",
		// westWallCondition: "",
		// northWallCondition: "",
		// southWallCondition: "",
		// roofCondition: "",
		// floorCondition: "",
		// wallMaterial: 0,
		// ceilingMaterial: 0,
		// floorMaterial: 0,
		// glassMaterial: 0,
		// southNeighborDist: 3,
		// southNeighborHeight: 4,
		// northNeighborDist: 3,
		// northNeighborHeight: 4,
		// HVAC: "",
		// naturalVent: null,
		//
		x_dim: 24,
		y_dim: 10,
		rotation_angle: 0,
		wwr_north: 0,
		wwr_south: 0,
		shading_type: "",
		hvac: "",
		wall_uvalue: null,
		roof_uvalue: null,
		floor_uvalue: null,
		window_uvalue: null,
		natural_ventilation: null,
		south_neighbor_distance: 8,
		south_neighbor_height: 15,
		north_neighbor_distance: 8,
		north_neighbor_height: 15,
		number_of_floor: "",
		south_wall_bc: "",
		north_wall_bc: "",
		east_wall_bc: "",
		west_wall_bc: "",
		floor_bc: "",
		roof_bc: "",
	},
};

export const energyConsumptionDataSlice = createSlice({
	name: "energyConsumptionData",
	initialState,
	reducers: {
		updateData(state, action) {
			state.data = action.payload;
		},
	},
});

export const { updateData } = energyConsumptionDataSlice.actions;
export const selectEnergyConsumptionData = (state) =>
	state.energyConsumptionData.data;
export default energyConsumptionDataSlice.reducer;
