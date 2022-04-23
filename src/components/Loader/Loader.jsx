import React from "react";
// component
import LoaderAnimation from "./LoaderAnimation";

const Loader = ({ message }) => {
	return (
		<div className="fixed z-50 h-screen w-screen bg-white bg-opacity-70 backdrop-blur-sm backdrop-filter">
			<div className="flex h-full w-full flex-col items-center justify-center">
				<div>
					<LoaderAnimation />
				</div>
				{message && <span>{message}</span>}
			</div>
		</div>
	);
};

export default Loader;
