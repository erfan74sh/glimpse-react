import React, { useState } from "react";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import ProgressBar from "../../../../components/progress-bar";
import Geometry from "./FormSteps/Geometry";
import BoundryCondition from "./FormSteps/BoundryCondition/BoundryCondition";
import SitePlan from "./FormSteps/SitePlan";
import Material from "./FormSteps/Material";
import Hvac from "./FormSteps/Hvac/Hvac";
import Review from "./FormSteps/Review";
import VisualBoundryCondition from "./VisualSteps/BoundryCondition";
import VisualGeometry from "./VisualSteps/Geometry";
import VisualMaterial from "./VisualSteps/Material";
import VisualSitePlan from "./VisualSteps/SitePlan";
import VisualHvac from "./VisualSteps/Hvac";
import VisualReview from "./VisualSteps/Review/VisualReview";
// services
import energyConsumptionServices from "../../../../services/estimations/energyConsumption.service";
import { logout } from "../../../../features/auth/authSlice";
// icons
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const EnergyConsumption = ({ inputData, primData }) => {
	const params = useParams();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const { subset, project_name, zone_name } = primData;

	const [step, setStep] = useState(0);

	const [isRequestPending, setIsRequestPending] = useState(false);

	const handleNextStep = () => {
		setStep((prev) => prev + 1);
	};

	const handlePrevStep = () => {
		setStep((prev) => prev - 1);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let tempInputData = { ...inputData };
		tempInputData.wwr_north = inputData.wwr_north / 100;
		tempInputData.wwr_south = inputData.wwr_south / 100;
		setIsRequestPending(true);
		// todo: edit error handling
		if (params && params.subset && params.simulationId) {
			console.log({ tempInputData, primData });
			try {
				const response = await energyConsumptionServices.editEstimation(
					params.simulationId,
					{ ...tempInputData, ...primData }
				);
				console.log(response.data);
				navigate({
					pathname: "/result",
					search: `?${createSearchParams({
						subset,
						project_name,
						zone_name,
					})}`,
				});
			} catch (err) {
				console.log("errore from edit energy comfort service", err);
				if (err.response && err.response.status === 401) {
					dispatch(logout());
					navigate("/auth");
				}
				setIsRequestPending(false);
			}
		} else {
			try {
				const response = await energyConsumptionServices.estimate({
					...tempInputData,
					...primData,
				});
				console.log(response.data);
				navigate({
					pathname: "/result",
					search: `?${createSearchParams({
						subset,
						project_name,
						zone_name,
					})}`,
				});
			} catch (err) {
				console.log("errore from visual comfort service", err);
				if (err.response && err.response.status === 401) {
					dispatch(logout());
					navigate("/auth");
				}
				setIsRequestPending(false);
			}
		}
	};

	const steps = [
		<Geometry nextStep={handleNextStep} data={inputData} />,
		<BoundryCondition nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<SitePlan nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<Material nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<Hvac nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<Review prevStep={handlePrevStep} />,
	];

	const visualSteps = [
		<VisualGeometry inputData={inputData} />,
		<VisualBoundryCondition />,
		<VisualSitePlan />,
		<VisualMaterial />,
		<VisualHvac />,
		<VisualReview />,
	];
	return (
		<>
			<section className="relative w-full lg:w-2/5 lg:pr-10">
				{steps[step]}
				<div className="absolute right-0 top-1/2 h-3/4 -translate-y-1/2 transform">
					<ProgressBar currentStep={step} totalSteps={5} />
				</div>
			</section>
			<section className="flex w-full flex-col lg:w-3/5 lg:pl-24">
				{visualSteps[step]}
				<button
					type="submit"
					form="energy-and-comfort"
					onClick={(e) => handleSubmit(e)}
					className={`bg-blue-550 mt-16 self-center rounded-md px-10 py-2 font-medium uppercase text-white ${
						step !== 5 && "pointer-events-none opacity-25"
					}`}
				>
					{isRequestPending ? (
						<FontAwesomeIcon icon={faCircleNotch} spin />
					) : params && params.simulationId ? (
						"update"
					) : (
						"start estimate"
					)}
				</button>
			</section>
		</>
	);
};

export default EnergyConsumption;
