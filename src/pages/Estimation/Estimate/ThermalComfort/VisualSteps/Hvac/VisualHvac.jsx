import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// slice
import { selectInput } from "../../../../../../features/data/inputDataSlice";
// assets
import Fancoil from "../../../../../../assets/images/HVAC/FANCOIL.png";
import Ptac from "../../../../../../assets/images/HVAC/PTAC.png";
import Pthp from "../../../../../../assets/images/HVAC/PTHP.png";
import VavPfp from "../../../../../../assets/images/HVAC/VAVPFP.png";
import VavRe from "../../../../../../assets/images/HVAC/VAVRE.png";
// icons
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const VisualHvac = () => {
	const { HVAC } = useSelector(selectInput);
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
			<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
				details
			</h2>
			<div className="">
				<div className="w-full px-10 h-96 flex justify-center">
					<article
						className={`relative flex justify-center items-center w-52 h-52 rounded-2xl ${
							HVAC !== "" ? "bg-white" : "bg-gray-400"
						} overflow-hidden`}
					>
						{HVAC === "" ? (
							<span className="text-xl font-semibold text-white uppercase">
								HVAC System
							</span>
						) : (
							<div
								className="w-full h-full relative group"
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
									className="w-full h-full object-contain"
								/>
								<FontAwesomeIcon
									icon={faExpand}
									className="absolute bottom-0 right-0 transform -translate-y-4 -translate-x-4 text-2xl cursor-pointer text-gray-600 transition group-hover:text-gray-700 group-hover:scale-125"
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
