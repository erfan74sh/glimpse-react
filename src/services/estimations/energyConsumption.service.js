import authHeader from "../auth-header";
import { axios } from "../axios";

const estimate = (energyConsumptionInputs) => {
	return axios.post("energies/", energyConsumptionInputs, {
		headers: authHeader(),
	});
};

const getEstimations = () => {
	return axios.get("/energies/", { headers: authHeader() });
};

const getEstimationById = (estimationId) => {
	return axios.get(`/energies/${estimationId}`, { headers: authHeader() });
};

const getEstimationByProjectName = (projectName) => {
	return axios.get(`/energies/project_name/${projectName}`, {
		headers: authHeader(),
	});
};

const energyConsumptionServices = {
	estimate,
	getEstimations,
	getEstimationById,
	getEstimationByProjectName,
};

export default energyConsumptionServices;
