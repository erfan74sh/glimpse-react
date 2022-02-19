import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// state
import { selectEnergyConsumptionData } from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";
// assets
import wall1 from "../../../../../../assets/images/materials/wall1.png";
import wall2 from "../../../../../../assets/images/materials/wall2.png";
import wall3 from "../../../../../../assets/images/materials/wall3.png";
import wall4 from "../../../../../../assets/images/materials/wall4.png";
import roof1 from "../../../../../../assets/images/materials/roof1.png";
import roof2 from "../../../../../../assets/images/materials/roof2.png";
import roof3 from "../../../../../../assets/images/materials/roof3.png";
import roof4 from "../../../../../../assets/images/materials/roof4.png";
import roof5 from "../../../../../../assets/images/materials/roof5.png";
import floor1 from "../../../../../../assets/images/materials/floor1.png";
import floor2 from "../../../../../../assets/images/materials/floor2.png";
import floor3 from "../../../../../../assets/images/materials/floor3.png";
import win1 from "../../../../../../assets/images/materials/win1.png";
import win2 from "../../../../../../assets/images/materials/win2.png";
import win3 from "../../../../../../assets/images/materials/win3.png";
import win4 from "../../../../../../assets/images/materials/win4.png";
// icons
import { faExpand } from "@fortawesome/free-solid-svg-icons";
// style
import "./VisualMaterial.scss";

const VisualMaterial = () => {
	const data = useSelector(selectEnergyConsumptionData);
	const wallImages = [
		{ val: "1.719", url: wall1 },
		{ val: "1.649", url: wall2 },
		{ val: "0.979", url: wall3 },
		{ val: "0.225", url: wall4 },
	];
	const roofImages = [
		{ val: "0.878", url: roof1 },
		{ val: "0.211", url: roof2 },
		{ val: "0.393", url: roof3 },
		{ val: "0.386", url: roof4 },
		{ val: "1.092", url: roof5 },
	];
	const floorImages = [
		{ val: "0.37", url: floor1 },
		{ val: "0.47", url: floor2 },
		{ val: "0.65", url: floor3 },
	];
	const windowImages = [
		{ val: "1.7", url: win1 },
		{ val: "2.6", url: win2 },
		{ val: "3.1", url: win3 },
		{ val: "5.7", url: win4 },
	];

	return (
		<>
			<h2 className=" mx-8 mb-9 border-b border-gray-500 pb-4 text-xl font-normal uppercase">
				construction
			</h2>
			<div className="">
				<div className="flex w-full flex-col justify-center gap-y-10 px-10 pt-5">
					<div className="flex justify-center gap-x-10">
						<article className="relative flex h-52 w-52 items-center justify-center rounded-2xl bg-gray-400">
							{!data.wall_uvalue ? (
								<span className="text-xl font-semibold uppercase text-white">
									wall
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
											wallImages.filter(
												(material) => material.val === data.wall_uvalue
											)[0].url
										}
										alt="wall 1"
										className="fullscrn-bg-white h-full w-full object-contain"
									/>
									<FontAwesomeIcon
										icon={faExpand}
										className="absolute bottom-0 right-0 -translate-y-4 -translate-x-4 transform cursor-pointer text-2xl text-gray-600 transition group-hover:scale-125 group-hover:text-gray-700"
									/>
								</div>
							)}
						</article>
						<article className="flex h-52 w-52 items-center justify-center rounded-2xl bg-gray-400">
							{!data.roof_uvalue ? (
								<span className="text-xl font-semibold uppercase text-white">
									roof
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
											roofImages.filter(
												(material) => material.val === data.roof_uvalue
											)[0].url
										}
										alt="wall 1"
										className="fullscrn-bg-white h-full w-full object-contain"
									/>
									<FontAwesomeIcon
										icon={faExpand}
										className="absolute bottom-0 right-0 -translate-y-4 -translate-x-4 transform cursor-pointer text-2xl text-gray-600 transition group-hover:scale-125 group-hover:text-gray-700"
									/>
								</div>
							)}
						</article>
					</div>
					<div className="flex justify-center gap-x-10">
						<article className="flex h-52 w-52 items-center justify-center rounded-2xl bg-gray-400">
							{!data.floor_uvalue ? (
								<span className="text-xl font-semibold uppercase text-white">
									floor
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
											floorImages.filter(
												(material) => material.val === data.floor_uvalue
											)[0].url
										}
										alt="wall 1"
										className="fullscrn-bg-white h-full w-full object-contain"
									/>
									<FontAwesomeIcon
										icon={faExpand}
										className="absolute bottom-0 right-0 -translate-y-4 -translate-x-4 transform cursor-pointer text-2xl text-gray-600 transition group-hover:scale-125 group-hover:text-gray-700"
									/>
								</div>
							)}
						</article>
						<article className="flex h-52 w-52 items-center justify-center rounded-2xl bg-gray-400">
							{!data.window_uvalue ? (
								<span className="text-xl font-semibold uppercase text-white">
									window
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
											windowImages.filter(
												(material) => material.val === data.window_uvalue
											)[0].url
										}
										alt="wall 1"
										className="fullscrn-bg-white h-full w-full object-contain"
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
			</div>
		</>
	);
};

export default VisualMaterial;
