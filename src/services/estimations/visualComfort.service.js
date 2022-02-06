import authHeader from "../auth-header";
import { axios } from "../axios";

const estimate = (visualComfortInputs) => {
	return axios.post("daylights/", visualComfortInputs, {
		headers: authHeader(),
	});
};

const visualComfortServices = {
	estimate,
};

export default visualComfortServices;
