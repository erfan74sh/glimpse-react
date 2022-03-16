import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import energyConsumptionServices from "../../services/estimations/energyConsumption.service";

const initialState = {
	status: "",
	inputData: {
		x_dim: 8,
		y_dim: 3,
		rotation_angle: 0,
		wwr_north: 10,
		wwr_south: 10,
		shading_type: "",
		hvac: "",
		wall_uvalue: null,
		roof_uvalue: null,
		floor_uvalue: null,
		window_uvalue: null,
		natural_ventilation: null,
		south_neighbor_distance: 2,
		south_neighbor_height: 4,
		north_neighbor_distance: 2,
		north_neighbor_height: 4,
		number_of_floor: "",
		south_wall_bc: "",
		north_wall_bc: "",
		east_wall_bc: "",
		west_wall_bc: "",
		floor_bc: "",
		roof_bc: "",
	},
	allSimulations: [],
};

export const getAllEnergySimulations = createAsyncThunk(
	"energyConsumptionData/getAllEnergySimulations",
	async (obj, { rejectWithValue }) => {
		try {
			const response = await energyConsumptionServices.getEstimations();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const energyConsumptionDataSlice = createSlice({
	name: "energyConsumptionData",
	initialState,
	reducers: {
		updateData(state, { payload }) {
			state.inputData = payload;
		},
	},
	extraReducers: {
		[getAllEnergySimulations.fulfilled]: (state, { payload }) => {
			state.status = "sucseed";
			state.allSimulations = payload;
			state.inputData = initialState.inputData;
		},
		[getAllEnergySimulations.rejected]: (state) => {
			state.status = "rejected";
		},
		[getAllEnergySimulations.pending]: (state) => {
			state.status = "pending";
		},
	},
});

export const { updateData } = energyConsumptionDataSlice.actions;
export const selectEnergyConsumptionData = (state) =>
	state.energyConsumptionData.inputData;
export default energyConsumptionDataSlice.reducer;
