import React from "react";
import { useSelector } from "react-redux";
// state
import { selectVisualComfortData } from "../../../../../../features/visualComfortData/VisualComfortDataSlice";

const Review = ({ prevStep }) => {
	const data = useSelector(selectVisualComfortData);

	const fullData = [
		{
			name: "rotation_angle",
			label: "rotation angle",
			unit: "degree",
			value: data.rotation_angle,
		},
		{ name: "x_dim", label: "length", unit: "m", value: data.x_dim },
		{ name: "y_dim", label: "width", unit: "m", value: data.y_dim },
		{ name: "wwr_north", label: "wwr_north", unit: "%", value: data.wwr_north },
		{ name: "wwr_south", label: "wwr_south", unit: "%", value: data.wwr_south },
		{
			name: "shading_type",
			label: "shading type",
			unit: "",
			value: {
				1: "horizontal",
				2: "horizontal louvre",
				3: "vertical",
				4: "all modes",
			},
		},
		{
			name: "reflectance_wall",
			label: "wall reflectance factor",
			unit: "",
			value: data.reflectance_wall,
		},
		{
			name: "reflectance_celing",
			label: "ceiling reflectance factor",
			unit: "",
			value: data.reflectance_celing,
		},
		{
			name: "reflectance_floor",
			label: "floor reflectance factor",
			unit: "",
			value: data.reflectance_floor,
		},
		{
			name: "vt_glass",
			label: "Window Glass Visible Transmittance Factor",
			unit: "",
			value: data.vt_glass,
		},
	];

	return (
		<div className="flex h-full flex-col">
			<section className="mb-8 flex flex-col pr-10 ">
				<h2 className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
					review
				</h2>
				<ul className="flex flex-col gap-y-2">
					{fullData.map((item, idx) => {
						return (
							<li
								className="flex justify-between border-b border-gray-400 text-gray-650"
								key={idx}
							>
								<span className="font-semibold capitalize text-gray-900">
									{item.label}:
								</span>
								<div>
									<span>
										{typeof item.value !== "object"
											? item.value
											: item.value[data[item.name]]}
									</span>
									<span className="text-sm normal-case text-gray-800">
										{item.unit && ` ${item.unit}`}
									</span>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
			<section className="mt-auto flex justify-center gap-x-4 pr-10">
				<button
					type="button"
					className="flex items-center justify-between rounded-md border-2 border-blue-550 bg-white px-5 py-1 font-medium uppercase text-blue-550"
					onClick={prevStep}
					value="site plan"
				>
					prev <span className="text-xs lowercase">(SitePlan)</span>
				</button>
			</section>
		</div>
	);
};

export default Review;
