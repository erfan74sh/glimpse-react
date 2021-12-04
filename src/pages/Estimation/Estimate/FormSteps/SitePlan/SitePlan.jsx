import React from "react";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";

const SitePlan = () => {
	return (
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
	);
};

export default SitePlan;
