import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "../features/userInfo/UserInfoSlice";
import EstimationPrimDataSlice from "../features/estimationPrimData/EstimationPrimDataSlice";
import VisualComfortDataSlice from "../features/visualComfortData/VisualComfortDataSlice";
import energyConsumptionDataSlice from "../features/energyConsumptionData/energyConsumptionsDataSlice";
import messageSlice from "../features/message/messageSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
	reducer: {
		userInfo: userInfoSlice,
		primaryData: EstimationPrimDataSlice,
		visualComfortData: VisualComfortDataSlice,
		energyConsumptionData: energyConsumptionDataSlice,
		message: messageSlice,
		auth: authReducer,
	},
});
