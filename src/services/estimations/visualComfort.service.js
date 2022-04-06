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

const getEstimationById = (estimationId) => {
	return axios.get(`/daylights/${estimationId}`, { headers: authHeader() });
};

const getEstimationByProjectName = (projectName) => {
	return axios.get(`/daylights/project_name/${projectName}`, {
		headers: authHeader(),
	});
};

const editEstimation = (simulationId, editedInputs) => {
	return axios.put(`/daylights/${simulationId}`, editedInputs, {
		headers: authHeader(),
	});
};

const visualComfortServices = {
	estimate,
	getEstimations,
	getEstimationById,
	getEstimationByProjectName,
	editEstimation,
};

export default visualComfortServices;
