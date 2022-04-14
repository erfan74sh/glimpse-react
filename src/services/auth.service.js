import authHeader from "./auth-header";
import { axios } from "./axios";

const signUp = (userInfo) => {
	return axios.post("/users/", userInfo);
};

const logIn = (userInfo) => {
	return axios.post("/login/access-token", userInfo).then((response) => {
		if (response.data["access_token"]) {
			localStorage.setItem("userAuth", JSON.stringify(response.data));
		}
		return response.data;
	});
};

const logOut = () => {
	localStorage.removeItem("userAuth");
	localStorage.removeItem("user");
};

const getCurrentUser = () => {
	return axios
		.get("/users/me", { headers: authHeader() })
		.then((response) => response.data);
};

const updateUser = (userInfo) => {
	return axios.put("/users/me", userInfo, { headers: authHeader() });
};

const authService = {
	signUp,
	logIn,
	logOut,
	getCurrentUser,
	updateUser,
};

export default authService;
