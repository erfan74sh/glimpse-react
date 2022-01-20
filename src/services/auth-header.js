import authService from "./auth.service";

export default authHeader = () => {
	const user = authService.getCurrentUser();
	if (user && user["access_token"]) {
		return { Authorization: `${user["token_type"]} ${user["access_token"]}` };
	}
};
