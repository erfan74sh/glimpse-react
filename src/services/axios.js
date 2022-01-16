import Axios from "axios";

export const axios = Axios.create({
	baseURL: "https://bspsim.app/api/v1",
});
