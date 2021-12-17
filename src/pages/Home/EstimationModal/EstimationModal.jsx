import React from "react";

const EstimationModal = () => {
	return (
		<form className="flex flex-col gap-y-2">
			<label>category</label>
			<input type="text" />
			<label>type</label>
			<input type="text" />
			<button type="submit">next</button>
		</form>
	);
};

export default EstimationModal;
