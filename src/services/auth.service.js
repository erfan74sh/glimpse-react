import authHeader from "./auth-header";
import { axios } from "./axios";

const signUp = async (userInfo) => {
	try {
		const response = await axios.post("/users/", userInfo);
		return response;
	} catch (err) {
		if (err.response) {
			// not in the 200 range
			console.log(err.response.data);
			console.log(err.response.status);
			console.log(err.response.headers);
		} else {
			console.log(`Error: ${err.message}`);
		}
	}
};

const logIn = (userInfo) => {
	// try {
	// 	const response = await axios.post("/login/access-token", userInfo);
	// 	if (response && response.data["access_token"]) {
	// 		localStorage.setItem("user", JSON.stringify(response.data));
	// 	}
	// 	return response;
	// } catch (err) {
	// 	if (err.response) {
	// 		// not in the 200 range
	// 		console.log(err.response.data);
	// 		console.log(err.response.status);
	// 		console.log(err.response.headers);
	// 	} else {
	// 		console.log(`Error: ${err.message}`);
	// 	}
	// }
	return axios.post("/login/access-token", userInfo).then((response) => {
		if (response.data["access_token"]) {
			localStorage.setItem("user", JSON.stringify(response.data));
		}
		return response.data;
	});
};

const logOut = () => {
	localStorage.removeItem("user");
};

const getCurrentUser = () => {
	return axios.get("/users/me", { headers: authHeader() });
};

const authService = {
	signUp,
	logIn,
	logOut,
	getCurrentUser,
};

export default authService;
