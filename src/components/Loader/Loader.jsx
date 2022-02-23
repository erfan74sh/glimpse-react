import React from "react";

const Loader = ({ message }) => {
	return (
		<div className="fixed z-50 h-screen w-screen bg-white bg-opacity-50 backdrop-blur-sm backdrop-filter">
			<div className="flex h-full w-full flex-col items-center justify-center">
				<span>animation here</span>
				<span>{message}</span>
			</div>
		</div>
	);
};

export default Loader;
