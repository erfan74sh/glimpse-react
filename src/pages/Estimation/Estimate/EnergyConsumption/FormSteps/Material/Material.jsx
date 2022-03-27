import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
// state
import {
	selectEnergyConsumptionData,
	updateData,
} from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";
// components
import SelectField from "../../../../../../components/inputs/SelectField/SelectField";

const Material = ({ nextStep, prevStep }) => {
	const data = useSelector(selectEnergyConsumptionData);

	const dispatch = useDispatch();

	const handleWallMaterialValue = (v) => {
		dispatch(
			updateData({
				...data,
				wall_uvalue: v,
			})
		);
	};

	const handleCeilingMaterialValue = (v) => {
		dispatch(
			updateData({
				...data,
				roof_uvalue: v,
			})
		);
	};

	const handleFloorMaterialValue = (v) => {
		dispatch(
			updateData({
				...data,
				floor_uvalue: v,
			})
		);
	};

	const handleGlassMaterialValue = (v) => {
		dispatch(
			updateData({
				...data,
				window_uvalue: v,
			})
		);
	};

	const wallMaterialOptions = [
		{
			label: "1.719",
			value: "1.719",
			moreDescription: "(Brick wall + Brick facade)",
			moreInfo: "دیوار آجری با نمای آجری",
		},
		{
			label: "1.649",
			value: "1.649",
			moreDescription: "(Cement Block + Stone facade)",
			moreInfo: "دیوار بلوک سیمانی با نمای سنگ",
		},
		{
			label: "0.979",
			value: "0.979",
			moreDescription: "(Cement Block + Cement facade)",
			moreInfo: "دیوار بلوک سیمانی با نمای سیمانی",
		},
		{
			label: "0.225",
			value: "0.225",
			moreDescription:
				"(Two layer Brick wall with Insulation in the middle + Brick facade)",
			moreInfo: "دیوار دولایه آجری با عایق میانی و نمای آجری",
		},
	];
	const floorMaterialOptions = [
		{
			label: "0.37",
			value: "0.37",
			moreDescription: "(Reinforced Concrete with air gap + Terrazzo)",
			moreInfo: "کف بتنی با پوشش موزاییک و فاصله هوایی",
		},
		{
			label: "0.47",
			value: "0.47",
			moreDescription: "(Beam Block + Parquet flooring)",
			moreInfo: "کف تیرچه بلوک با پوشش پارکت",
		},
		{
			label: "0.65",
			value: "0.65",
			moreDescription: "(Reinforced concrete + Parquet flooring)",
			moreInfo: "کف بتنی با پوشش پارکت",
		},
	];
	const roofMaterialOptions = [
		{
			label: "0.878",
			value: "0.878",
			moreDescription: "(Gypsum Board + Reinforced Concrete + Terrazzo)",
			moreInfo: "بام بتنی با کفپوش موزاییکی",
		},
		{
			label: "0.211",
			value: "0.211",
			moreDescription:
				"(Reinforced Concrete with thermal insullation + Terrazzo)",
			moreInfo: "بام بتنی با کف پوش موزاییکی و عایق حرارتی",
		},
		{
			label: "0.393",
			value: "0.393",
			moreDescription: "(Beam block + terrazzo)",
			moreInfo: "بام تیرچه بلوک با کفپوش موزاییکی",
		},
		{
			label: "0.386",
			value: "0.386",
			moreDescription: "(Beam Block with out terrazzo)",
			moreInfo: "بام تیرچه بلوک بدون کفپوش موزاییکی",
		},
		{
			label: "1.092",
			value: "1.092",
			moreDescription: "(Gypsum Plaster + Reinforced Concrete + Terrazzo)",
			moreInfo: "بام بتنی با کفپوش موزاییکی و نازک کاری گچ اندود داخلی",
		},
	];
	const glassMaterialOptions = [
		{
			label: "1.7",
			value: "1.7",
			moreInfo: "?",
			moreDescription: "(Triple glazed windows)",
		},
		{
			label: "2.6",
			value: "2.6",
			moreInfo: "?",
			moreDescription: "(Double low-E glazed windows)",
		},
		{
			label: "3.1",
			value: "3.1",
			moreInfo: "?",
			moreDescription: "(Double glazed windows)",
		},
		{
			label: "5.7",
			value: "5.7",
			moreInfo: "?",
			moreDescription: "(Single glazed windows)",
		},
	];

	return (
		<Formik
			initialValues={data}
			onSubmit={(values) => {
				// todo: edit submit function
				console.log(values);
				nextStep();
			}}
			validationSchema={yup.object({
				wall_uvalue: yup
					.string()
					.oneOf(["1.719", "1.649", "0.979", "0.225"], "choose from list")
					.required("required"),
				roof_uvalue: yup
					.string()
					.oneOf(
						["0.878", "0.211", "0.393", "0.386", "1.092"],
						"choose from list"
					)
					.required("required"),
				floor_uvalue: yup
					.string()
					.oneOf(["0.37", "0.47", "0.65"], "choose from list")
					.required("required"),
				window_uvalue: yup
					.string()
					.oneOf(["5.7", "3.1", "2.6", "1.7"], "choose one")
					.required("required"),
			})}
		>
			<Form className="flex h-full flex-col">
				<fieldset className="mb-8 flex flex-col gap-y-5 pr-10">
					<legend className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
						material
					</legend>
					<SelectField
						name="wall_uvalue"
						label="Wall"
						selectOptions={wallMaterialOptions}
						placeholder="select type"
						moreInfo="ضریب هدایتی دیوار"
						unit="w/m.k"
						handleValue={handleWallMaterialValue}
					/>
					<SelectField
						name="roof_uvalue"
						label="roof"
						selectOptions={roofMaterialOptions}
						placeholder="select type"
						moreInfo="ضریب هدایتی بام"
						unit="w/m.k"
						handleValue={handleCeilingMaterialValue}
					/>
					<SelectField
						name="floor_uvalue"
						label="Floor"
						selectOptions={floorMaterialOptions}
						placeholder="select type"
						moreInfo="ضریب هدایتی کف"
						unit="w/m.k"
						handleValue={handleFloorMaterialValue}
					/>
					<SelectField
						name="window_uvalue"
						selectOptions={glassMaterialOptions}
						label="window"
						placeholder="select type"
						moreInfo="ضریب هدایتی پنجره"
						unit="w/m.k"
						handleValue={handleGlassMaterialValue}
					/>
				</fieldset>
				<section className="mt-auto flex justify-center gap-x-4 pr-10">
					<button
						type="button"
						className="flex items-center gap-x-1 rounded-md border-2 border-blue-550 bg-white px-5 py-1 font-medium uppercase text-blue-550"
						value="geometry"
						onClick={prevStep}
					>
						prev <span className="text-xs lowercase">(site plan)</span>
					</button>
					<button
						type="submit"
						className="flex items-center gap-x-1 rounded-md border-2 border-blue-550 bg-blue-550 px-5 py-1 font-medium uppercase text-white"
					>
						next <span className="text-xs lowercase">(ventilation)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default Material;
