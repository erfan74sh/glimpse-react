export default function authHeader() {
	const user = JSON.parse(localStorage.getItem("userAuth"));
	if (user && user["access_token"]) {
		return { Authorization: `${user["token_type"]} ${user["access_token"]}` };
	} else {
		return {};
	}
}
