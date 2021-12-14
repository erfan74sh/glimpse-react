import React from "react";

const SignUp = () => {
	return (
		<form>
			<input type="text" name="first-name" placeholder="firstname" />
			<input type="text" name="last-name" placeholder="lastname" />
			<input type="email" name="email" placeholder="email" />
			<input type="password" name="password" placeholder="password" />
			<button type="submit">submit</button>
		</form>
	);
};

export default SignUp;
