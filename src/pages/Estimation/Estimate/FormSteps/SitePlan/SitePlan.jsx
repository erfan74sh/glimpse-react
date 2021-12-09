import React from "react";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";

const SitePlan = ({ handleStep }) => {
	const handlePrevStep = (e) => {
		handleStep(e);
	};

	return (
		<>
			<fieldset className="flex flex-col gap-y-9 pr-10">
				<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
					site plan
				</legend>
				<InputSelect
					placeHolder="South neighbor distance"
					items={["item1", "item2", "item3"]}
				/>
				<InputSelect
					placeHolder="South neighbor height"
					items={["item1", "item2", "item3"]}
				/>
				<InputSelect
					placeHolder="North neighbor distance"
					items={["item1", "item2", "item3"]}
				/>
				<InputSelect
					placeHolder="North neighbor height"
					items={["item1", "item2", "item3"]}
				/>
			</fieldset>
			<section className="flex justify-center gap-x-4 mt-auto mr-8">
				<button
					type="button"
					className="flex items-center gap-x-1 px-6 py-2 text-white font-medium uppercase rounded-md bg-blue-550"
					value="material"
					onClick={handlePrevStep}
				>
					prev <span className="text-xs lowercase">(material)</span>
				</button>
			</section>
		</>
	);
};

export default SitePlan;
