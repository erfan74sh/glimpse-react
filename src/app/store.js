import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../features/data/inputDataSlice";
import userInfoSlice from "../features/userInfo/UserInfoSlice";
import EstimationPrimDataSlice from "../features/estimationPrimData/EstimationPrimDataSlice";
import VisualComfortDataSlice from "../features/visualComfortData/VisualComfortDataSlice";
import energyConsumptionDataSlice from "../features/energyConsumptionData/energyConsumptionsDataSlice";
import structureDesignDataSlice from "../features/structureDesignData/structureDesignDataSlice";
import messageSlice from "../features/message/messageSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
	reducer: {
		userInfo: userInfoSlice,
		primaryData: EstimationPrimDataSlice,
		input: inputReducer,
		visualComfortData: VisualComfortDataSlice,
		energyConsumptionData: energyConsumptionDataSlice,
		structureDesignData: structureDesignDataSlice,
		message: messageSlice,
		auth: authReducer,
	},
});
