import React from "react";

const EstimationModal = () => {
	return (
		<form className="flex flex-col gap-y-2">
			<label>category</label>
			<input type="text" />
			<label>type</label>
			<input type="text" />
			<label>
				<input type="radio" name="test" />
				new project
			</label>
			<label>
				<input type="radio" name="test" />
				prev projects
			</label>
			<button type="submit">next</button>
		</form>
	);
};

export default EstimationModal;
