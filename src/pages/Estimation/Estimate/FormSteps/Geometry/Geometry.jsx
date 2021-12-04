import React from "react";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";

const Geometry = () => {
	return (
		<fieldset className="flex flex-col gap-y-9 pr-10">
			<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
				geometry
			</legend>
			<InputSelect
				placeHolder="Y-Dimention"
				items={["item1", "item2", "item3"]}
			/>
			<InputSelect
				placeHolder="Y-Dimention"
				items={["item1", "item2", "item3"]}
			/>
			<InputSelect
				placeHolder="WWR-North"
				items={["item1", "item2", "item3"]}
			/>
			<InputSelect
				placeHolder="WWR-South"
				items={["item1", "item2", "item3"]}
			/>
			<InputSelect
				placeHolder="Shading Type"
				items={["item1", "item2", "item3"]}
			/>
		</fieldset>
	);
};

export default Geometry;
