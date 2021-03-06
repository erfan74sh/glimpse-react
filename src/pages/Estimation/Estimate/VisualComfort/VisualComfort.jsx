import React, { useState } from "react";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import ProgressBar from "../../../../components/progress-bar";
import Geometry from "./FormSteps/Geometry";
import Material from "./FormSteps/Material/Material";
import SitePlan from "./FormSteps/SitePlan";
import Review from "./FormSteps/Review";
import VisualMaterial from "./VisualSteps/Material";
import VisualGeometry from "./VisualSteps/Geometry";
import VisualSitePlan from "./VisualSteps/SitePlan";
import VisualReview from "./VisualSteps/Review/VisualReview";
// services
import visualComfortServices from "../../../../services/estimations/visualComfort.service";
import { logout } from "../../../../features/auth/authSlice";
// icons
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const ThermalComfort = ({ inputData, primData }) => {
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
		// todo: edit error handling
		let tempInputData = { ...inputData };
		tempInputData.wwr_north = inputData.wwr_north / 100;
		tempInputData.wwr_south = inputData.wwr_south / 100;
		setIsRequestPending(true);
		if (params && params.subset && params.simulationId) {
			try {
				const response = await visualComfortServices.editEstimation(
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
				console.log("errore from edit visual comfort service", err);
				console.log(err.response);
				if (err.response && err.response.status === 401) {
					dispatch(logout());
					navigate("/auth");
				}
				setIsRequestPending(false);
			}
		} else {
			try {
				const response = await visualComfortServices.estimate({
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
		<Material nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<SitePlan nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<Review prevStep={handlePrevStep} />,
	];

	const visualSteps = [
		<VisualGeometry />,
		<VisualMaterial />,
		<VisualSitePlan />,
		<VisualReview />,
	];
	return (
		<>
			<section className="relative w-full lg:w-2/5 lg:pr-10">
				{steps[step]}
				<div className="absolute right-0 top-1/2 h-3/4 -translate-y-1/2 transform">
					<ProgressBar currentStep={step} totalSteps={3} />
				</div>
			</section>
			<section className="flex w-full flex-col lg:w-3/5 lg:pl-24">
				{visualSteps[step]}
				<button
					type="submit"
					form="energy-and-comfort"
					onClick={(e) => handleSubmit(e)}
					className={`bg-blue-550 mt-16 self-center rounded-md px-10 py-2 font-medium uppercase text-white ${
						step !== 3 && "pointer-events-none opacity-25"
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

export default ThermalComfort;
