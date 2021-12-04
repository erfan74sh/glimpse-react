import React from "react";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";

const Material = () => {
	return (
		<fieldset className="flex flex-col gap-y-9 pr-10">
			<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
				material
			</legend>
			<InputSelect
				placeHolder="Wall-material"
				items={["item1", "item2", "item3"]}
			/>
			<InputSelect
				placeHolder="Ceiling-material"
				items={["item1", "item2", "item3"]}
			/>
			<InputSelect
				placeHolder="Floor-material"
				items={["item1", "item2", "item3"]}
			/>
			<InputSelect
				placeHolder="Glass-material"
				items={["item1", "item2", "item3"]}
			/>
		</fieldset>
	);
};

export default Material;
