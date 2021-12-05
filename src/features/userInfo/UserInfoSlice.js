import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	info: {
		firstName: "mohammad",
		lastName: "rajaian",
		email: "mrajaian@gmail.com",
		address: "No 64. Farhangian St , Esfahan",
		phone: "09361759625",
		education: "Master Of Energy And Architecture",
		position: "Co_founder Of More Office",
	},
};

export const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {},
});

export const selectUserInfo = (state) => state.userInfo.info;
export default userInfoSlice.reducer;
