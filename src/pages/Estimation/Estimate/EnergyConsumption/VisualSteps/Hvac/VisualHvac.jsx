import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// slice
import { selectEnergyConsumptionData } from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";
// assets
import Fancoil from "../../../../../../assets/images/HVAC/FANCOIL.png";
import Ptac from "../../../../../../assets/images/HVAC/PTAC.png";
import Pthp from "../../../../../../assets/images/HVAC/PTHP.png";
import VavPfp from "../../../../../../assets/images/HVAC/VAVPFP.png";
import VavRe from "../../../../../../assets/images/HVAC/VAVRE.png";
// icons
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const VisualHvac = () => {
	const { HVAC } = useSelector(selectEnergyConsumptionData);
	const hvacOptions = [
		{ val: "ideal air loads", url: Fancoil },
		{ val: "PTAC | residential", url: Ptac },
		{ val: "PTHP | residential", url: Pthp },
		{ val: "VAV w/reheat", url: VavRe },
		{ val: "VAV w/PFP boxes", url: VavPfp },
		{ val: "fan coil units + DOAS", url: Fancoil },
	];
	return (
		<>
			<h2 className=" mx-8 mb-9 border-b border-gray-500 pb-4 text-xl font-normal uppercase">
				details
			</h2>
			<div className="">
				<div className="flex h-96 w-full justify-center px-10">
					<article
						className={`relative flex h-96 w-96 items-center justify-center rounded-2xl ${
							HVAC !== "" ? "bg-white" : "bg-gray-400"
						} overflow-hidden`}
					>
						{HVAC === "" ? (
							<span className="text-xl font-semibold uppercase text-white">
								HVAC System
							</span>
						) : (
							<div
								className="group relative h-full w-full"
								onClick={(e) =>
									e.currentTarget
										.getElementsByTagName("img")[0]
										.requestFullscreen()
								}
							>
								<img
									src={
										hvacOptions.filter((option) => option.val === HVAC)[0].url
									}
									alt={HVAC}
									className="h-full w-full object-contain"
								/>
								<FontAwesomeIcon
									icon={faExpand}
									className="absolute bottom-0 right-0 -translate-y-4 -translate-x-4 transform cursor-pointer text-2xl text-gray-600 transition group-hover:scale-125 group-hover:text-gray-700"
								/>
							</div>
						)}
					</article>
				</div>
			</div>
		</>
	);
};

export default VisualHvac;
