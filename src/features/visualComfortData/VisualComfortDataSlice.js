import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import visualComfortService from "../../services/estimations/visualComfort.service";

const initialState = {
	status: "",
	inputData: {
		x_dim: 8,
		y_dim: 3,
		rotation_angle: 0,
		wwr_north: 10,
		wwr_south: 10,
		shading_type: "",
		reflectance_wall: 0.2,
		reflectance_celing: 0.2,
		reflectance_floor: 0.2,
		vt_glass: "",
		south_neighbor_distance: 2,
		south_neighbor_height: 4,
		north_neighbor_distance: 2,
		north_neighbor_height: 4,
	},
	allSimulations: [],
};

export const getAllVisualSimulations = createAsyncThunk(
	"visualcomfortData/getAllVisualSimulations",
	async (obj, { rejectWithValue }) => {
		try {
			const response = await visualComfortService.getEstimations();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const VisualComfortDataSlice = createSlice({
	name: "visualcomfortData",
	initialState,
	reducers: {
		updateData(state, { payload }) {
			state.inputData = payload;
		},
	},
	extraReducers: {
		[getAllVisualSimulations.fulfilled]: (state, { payload }) => {
			state.status = "sucseed";
			state.allSimulations = payload;
			state.inputData = initialState.inputData;
		},
		[getAllVisualSimulations.rejected]: (state) => {
			state.status = "rejected";
		},
		[getAllVisualSimulations.pending]: (state) => {
			state.status = "pending";
		},
	},
});

export const { updateData } = VisualComfortDataSlice.actions;
export const selectVisualComfortData = (state) =>
	state.visualComfortData.inputData;
export default VisualComfortDataSlice.reducer;
