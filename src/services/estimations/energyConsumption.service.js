import authHeader from "../auth-header";
import { axios } from "../axios";

const estimate = (energyConsumptionInputs) => {
	return axios.post("energies/", energyConsumptionInputs, {
		headers: authHeader(),
	});
};

const energyConsumptionServices = {
	estimate,
};

export default energyConsumptionServices;
