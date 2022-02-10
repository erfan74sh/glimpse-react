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

const energyConsumptionServices = {
	estimate,
	getEstimations,
};

export default energyConsumptionServices;
