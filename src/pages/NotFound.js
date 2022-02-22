import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center">
			<header className="flex flex-col items-center">
				<h1 className="text-9xl font-medium">404</h1>
				<p>page not found!</p>
			</header>
			<nav>
				<Link to="/">go home</Link>
			</nav>
		</main>
	);
};

export default NotFound;
