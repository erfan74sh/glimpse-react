import React from "react";
import { useSelector } from "react-redux";
// slice
import { selectInput } from "../../../../../../features/data/inputDataSlice";
// assets
import Fancoil from "../../../../../../assets/images/HVAC/FANCOIL.png";
import Ptac from "../../../../../../assets/images/HVAC/PTAC.png";
import Pthp from "../../../../../../assets/images/HVAC/PTHP.png";
import VavPfp from "../../../../../../assets/images/HVAC/VAVPFP.png";
import VavRe from "../../../../../../assets/images/HVAC/VAVRE.png";

const VisualHvac = () => {
	const { HVAC } = useSelector(selectInput);
	return (
		<>
			<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
				details
			</h2>
			<div className="">
				<div className="w-full px-10 h-96 flex justify-center">
					<div className="h-full w-96 flex justify-center items-center rounded-2xl bg-gray-400">
						<span className="text-xl font-semibold text-white uppercase">
							HVAC system
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default VisualHvac;
