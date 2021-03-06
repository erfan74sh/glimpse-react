import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as yup from "yup";
// state
import {
	selectVisualComfortData,
	updateData,
} from "../../../../../../features/visualComfortData/VisualComfortDataSlice";
// components
import SelectField from "../../../../../../components/inputs/SelectField/SelectField";
import InputRange from "../../../../../../components/inputs/InputRange";
// constants
import { vtGlassOptions } from "../../../../../../constants";

const Material = ({ nextStep, prevStep }) => {
	const data = useSelector(selectVisualComfortData);

	const dispatch = useDispatch();

	const handleReflectanCeWall = (v) => {
		dispatch(
			updateData({
				...data,
				reflectance_wall: v,
			})
		);
	};
	const handleReflectanCeCeiling = (v) => {
		dispatch(
			updateData({
				...data,
				reflectance_celing: v,
			})
		);
	};
	const handleReflectanCeFloor = (v) => {
		dispatch(
			updateData({
				...data,
				reflectance_floor: v,
			})
		);
	};
	const handleVtGlass = (v) => {
		dispatch(
			updateData({
				...data,
				vt_glass: v,
			})
		);
	};

	return (
		<Formik
			initialValues={data}
			onSubmit={(values) => {
				// todo: edit form submit
				console.log(values);
				nextStep();
			}}
			validationSchema={yup.object({
				reflectance_wall: yup.string().required("required"),
			})}
		>
			<Form className="flex h-full flex-col">
				<fieldset className="mb-8 flex flex-col gap-y-5 pr-10">
					<legend className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
						Material
					</legend>

					<InputRange
						name="reflectance_wall"
						label="Wall Reflectance Factor"
						min="0.2"
						max="0.7"
						step="0.05"
						handleValue={handleReflectanCeWall}
						moreInfo="ضریب بازتاب نور بر روی سطح دیوار"
						initialVal={data.reflectance_wall}
					/>
					<InputRange
						name="reflectance_celing"
						label="Ceiling Reflectance Factor"
						min="0.2"
						max="0.7"
						step="0.05"
						handleValue={handleReflectanCeCeiling}
						moreInfo="ضریب بازتاب نور بر روی سطح سقف"
						initialVal={data.reflectance_celing}
					/>
					<InputRange
						name="reflectance_floor"
						label="Floor Reflectance Factor"
						min="0.2"
						max="0.7"
						step="0.05"
						handleValue={handleReflectanCeFloor}
						moreInfo="ضریب بازتاب نور بر روی سطح کف"
						initialVal={data.reflectance_floor}
					/>
					<SelectField
						name="vt_glass"
						selectOptions={vtGlassOptions}
						label="Window Glass Visible Transmittance Factor"
						placeholder="choose one"
						handleValue={handleVtGlass}
						moreInfo="ضریب انتقال نور از شیشه"
					/>
				</fieldset>
				<section className="mt-auto flex justify-center gap-x-4 pr-10">
					<button
						type="button"
						className="border-blue-550 text-blue-550 flex items-center gap-x-1 rounded-md border-2 bg-white px-5 py-1 font-medium uppercase"
						value="geometry"
						onClick={prevStep}
					>
						prev <span className="text-xs lowercase">(geometry)</span>
					</button>
					<button
						type="submit"
						className="border-blue-550 bg-blue-550 flex items-center gap-x-1 rounded-md border-2 px-5 py-1 font-medium uppercase text-white"
					>
						next <span className="text-xs lowercase">(site plan)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default Material;
