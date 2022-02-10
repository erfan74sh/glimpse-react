import authHeader from "../auth-header";
import { axios } from "../axios";

const estimate = (visualComfortInputs) => {
	return axios.post("daylights/", visualComfortInputs, {
		headers: authHeader(),
	});
};

const getEstimations = () => {
	return axios.get("/daylights/", { headers: authHeader() });
};

const visualComfortServices = {
	estimate,
	getEstimations,
};

export default visualComfortServices;
