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

const authService = {
	signUp,
};

export default authService;
