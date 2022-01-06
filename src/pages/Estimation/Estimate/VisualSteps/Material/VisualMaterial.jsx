import React from "react";
import { useSelector } from "react-redux";
// state
import { selectInput } from "../../../../../features/data/inputDataSlice";
// assets
import wall1 from "../../../../../assets/images/materials/wall1.png";
import wall2 from "../../../../../assets/images/materials/wall2.png";
import wall3 from "../../../../../assets/images/materials/wall3.png";
import wall4 from "../../../../../assets/images/materials/wall4.png";
import roof1 from "../../../../../assets/images/materials/roof1.png";
import roof2 from "../../../../../assets/images/materials/roof2.png";
import roof3 from "../../../../../assets/images/materials/roof3.png";
import roof4 from "../../../../../assets/images/materials/roof4.png";
import roof5 from "../../../../../assets/images/materials/roof5.png";
import floor1 from "../../../../../assets/images/materials/floor1.png";
import floor2 from "../../../../../assets/images/materials/floor2.png";
import floor3 from "../../../../../assets/images/materials/floor3.png";
import win1 from "../../../../../assets/images/materials/win1.png";
import win2 from "../../../../../assets/images/materials/win2.png";
import win3 from "../../../../../assets/images/materials/win3.png";
import win4 from "../../../../../assets/images/materials/win4.png";

const VisualMaterial = () => {
	const data = useSelector(selectInput);
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
		{ val: "0.58", url: win1 },
		{ val: "0.72", url: win2 },
		{ val: "0.8", url: win3 },
		{ val: "0.9", url: win4 },
	];

	return (
		<>
			<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
				details
			</h2>
			<div className="">
				<div className="w-full flex flex-col gap-y-10 justify-center px-10 pt-5">
					<div className="flex gap-x-10 justify-center">
						<article className="flex justify-center items-center w-52 h-52 rounded-2xl bg-gray-400">
							{data.wallMaterial === 0 ? (
								<span className="text-xl font-semibold text-white uppercase">
									wall
								</span>
							) : (
								<img
									src={
										wallImages.filter(
											(material) => material.val === data.wallMaterial
										)[0].url
									}
									alt="wall 1"
									className="w-full h-full object-contain"
								/>
							)}
						</article>
						<article className="flex justify-center items-center w-52 h-52 rounded-2xl bg-gray-400">
							{data.ceilingMaterial === 0 ? (
								<span className="text-xl font-semibold text-white uppercase">
									roof
								</span>
							) : (
								<img
									src={wall1}
									alt="wall 1"
									className="w-full h-full object-contain"
								/>
							)}
						</article>
					</div>
					<div className="flex gap-x-10 justify-center">
						<article className="flex justify-center items-center w-52 h-52 rounded-2xl bg-gray-400">
							{data.floorMaterial === 0 ? (
								<span className="text-xl font-semibold text-white uppercase">
									floor
								</span>
							) : (
								<img
									src={wall1}
									alt="wall 1"
									className="w-full h-full object-contain"
								/>
							)}
						</article>
						<article className="flex justify-center items-center w-52 h-52 rounded-2xl bg-gray-400">
							{data.glassMaterial === 0 ? (
								<span className="text-xl font-semibold text-white uppercase">
									window
								</span>
							) : (
								<img
									src={wall1}
									alt="wall 1"
									className="w-full h-full object-contain"
								/>
							)}
						</article>
					</div>
				</div>
			</div>
		</>
	);
};

export default VisualMaterial;
