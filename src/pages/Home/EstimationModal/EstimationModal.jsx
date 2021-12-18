import React from "react";
// components
import RadioBtn from "../../../components/inputs/RadioBtn";

const EstimationModal = () => {
	return (
		<form className="flex flex-col gap-y-2">
			<label>category</label>
			<input type="text" />
			<label>type</label>
			<input type="text" />
			<RadioBtn></RadioBtn>
			<label>
				<input type="radio" name="test" />
				prev projects
			</label>
			<button type="submit">next</button>
		</form>
	);
};

export default EstimationModal;
