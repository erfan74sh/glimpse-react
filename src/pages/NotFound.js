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
				<ul className="mt-10 flex gap-x-5">
					<li>
						<Link
							to="/"
							className="border-b-2 border-blue-400 px-4 py-2 capitalize transition hover:text-blue-400"
						>
							go home
						</Link>
					</li>
					<li>or</li>
					<li>
						<Link
							to="/contact-us"
							className="border-b-2 border-blue-400 px-4 py-2 capitalize transition hover:text-blue-400"
						>
							contact us
						</Link>
					</li>
				</ul>
			</nav>
		</main>
	);
};

export default NotFound;
