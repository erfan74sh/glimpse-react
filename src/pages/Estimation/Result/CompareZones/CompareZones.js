import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PDFDownloadLink } from "@react-pdf/renderer";
// components
import Nav from "../../../../components/Nav";
import Chart from "../Chart";
import PdfDoc from "../PdfDoc";
import PointsAndGrades from "../PiontsAndGrades/PointsAndGrades";
// icons
import {
	faEye,
	faEyeSlash,
	faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
// services
import energyConsumptionServices from "../../../../services/estimations/energyConsumption.service";
import visualComfortServices from "../../../../services/estimations/visualComfort.service";

const CompareZones = () => {
	const [searchParams] = useSearchParams();
	const currentSubset = searchParams.get("subset");
	const currentProjectName = searchParams.get("project_name");

	const [altsInProject, setAltsInProject] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			// todo: add more condition when other subset API's ready
			const response =
				currentSubset === "energy_consumption"
					? await energyConsumptionServices.getEstimationByProjectName(
							currentProjectName
					  )
					: currentSubset === "visual_comfort"
					? await visualComfortServices.getEstimationByProjectName(
							currentProjectName
					  )
					: null;
			setAltsInProject(response?.data);
		};
		fetchData();
	}, [currentProjectName, currentSubset]);

	const [series, setSeries] = useState([]);
	useEffect(() => {
		const unitOptions = {
			area: "m\u00B2",

			primary_energy: "kWh/m\u00B2",
			total_energy: "kWh/m\u00B2",
			coolingload: "kWh/m\u00B2",
			heatingload: "kWh/m\u00B2",
			electriclight: "kWh/m\u00B2",
			fanger20: "%",
			fanger10: "%",
			adaptiveashrae80: "%",
			adaptiveashrae90: "%",
			adaptiveencalss2por: "%",
			overheatot_occupied_hours: "hr",
			underheatot_occupied_hours: "hr",
			verheatdbt_occupied_hours: "hr",
			underheatdbt_occupied_hours: "hr",

			udi: "%",
			mda: "%",
			svd: "%",
			ase: "%",
			sda: "%",
		};
		const colorPallet = [
			"#784AC1",
			"#00C48C",
			"#B5008E",
			"#0085D3",
			"#003576",
			"#8b5cf6",
			"#a21caf",
			"#f43f5e",
		];
		// const alts = zones.filter(
		// 	(value) =>
		// 		value.project_name === currentProject && value.zone_name === currentZone
		// );
		const outputs = altsInProject.map((output, idx) => {
			let inputData = [];
			let outputData = [];
			let primaryData = {};
			for (const item in output) {
				if (
					item === "subset" ||
					item === "building_program" ||
					item === "location" ||
					item === "high_performance_building_index" ||
					item === "project_name" ||
					item === "alternative_name" ||
					item === "zone_name" ||
					item === "id" ||
					item === "user_id"
				) {
					primaryData[item] = output[item];
				} else if (
					item === "area" ||
					// visual-comfort outputs
					item === "udi" ||
					item === "ase" ||
					item === "svd" ||
					item === "mda" ||
					item === "sda" ||
					// energy outputs
					item === "coolingload" ||
					item === "heatingload" ||
					item === "electriclight" ||
					item === "fanger20" ||
					item === "fanger10" ||
					item === "adaptiveashrae80" ||
					item === "adaptiveashrae90" ||
					item === "adaptiveencalss2por" ||
					item === "overheatot_occupied_hours" ||
					item === "underheatot_occupied_hours" ||
					item === "verheatdbt_occupied_hours" ||
					item === "underheatdbt_occupied_hours" ||
					item === "primary_energy" ||
					item === "total_energy"
					// todo: include other subset outputs here
				) {
					outputData.push({
						name: item,
						amt: +(Math.round(output[item] + "e+2") + "e-2"),
						unit: unitOptions[item],
					});
				} else {
					inputData.push({
						name: item,
						amt: output[item],
						unit: unitOptions[item],
					});
				}
			}

			return {
				...primaryData,
				name: output.alternative_name,
				date: "2021.11.20",
				stroke: colorPallet[idx],
				opacity: 1,
				visible: true,
				showDropdown: false,
				data: outputData,
				inputData,
			};
		});
		setSeries(outputs);
	}, [altsInProject]);

	const [zoneList, setZoneList] = useState([]);
	// ! this useEffect is not efficient
	useEffect(() => {
		// ? get all zones in currentProject
		if (altsInProject.length !== 0) {
			const list = Array.from(altsInProject, (zone) => zone.zone_name);
			const uniqueList = Array.from(new Set(list));
			setZoneList(uniqueList);
		}
	}, [altsInProject]);

	const handleVisibility = (e) => {
		const name = e.currentTarget.parentNode.dataset.name;
		let temState = [...series];
		let item = temState.filter((entry) => entry.name === name)[0];
		item.visible = !item.visible;
		setSeries(temState);
	};

	return (
		<>
			<Nav />
			<main className="px-5 py-16 lg:px-24" id="compare-zone__main">
				<header className="mb-10">
					<h1 className="border-blue-550 text-blue-550 border-l-8 pl-3 text-3xl font-bold uppercase leading-8">
						compare zones
					</h1>
				</header>
				<div>
					<section className="max-h-152 relative flex items-center justify-center overflow-hidden">
						{series.length > 0 ? <Chart series={series} /> : "loading..."}
						<span className="absolute flex h-full w-full items-center justify-center bg-white bg-opacity-50 px-3 text-lg font-medium text-red-500 backdrop-blur-lg backdrop-filter sm:hidden">
							{" "}
							<FontAwesomeIcon
								icon={faExclamationCircle}
								className=" mr-2 text-2xl"
							/>
							rotate your phone to see chart!
						</span>
					</section>
					<PointsAndGrades subset={currentSubset} alternatives={series} />
					<section className="mt-20 flex flex-col gap-y-10 xl:px-40">
						{zoneList.map((zoneName, idx) => {
							return (
								<div key={idx}>
									<header className="mb-9 flex items-center justify-between border-b border-gray-500 pb-2 text-xl font-normal uppercase lg:mx-8">
										<h2>{zoneName}</h2>
									</header>
									<ul className="flex flex-col gap-y-6">
										{series
											.filter(
												(alternative) => alternative.zone_name === zoneName
											)
											.map((entry, i) => (
												<li
													key={i}
													className="shadow-full-sm relative flex content-between items-center rounded-md bg-white px-4 py-3.5 text-sm lg:mx-16"
													data-name={entry.name}
												>
													{/* <PDFViewer className="h-screen w-full">
										<PdfDoc data={entry} />
									</PDFViewer> */}
													<span className="font-bold">{i + 1} -&nbsp; </span>{" "}
													<span>{` ${entry.name}`}</span>
													<span className="ml-1 text-xs">({entry.date})</span>
													<button className="ml-4">
														<PDFDownloadLink
															document={<PdfDoc data={entry} />}
															fileName={`${entry.name}.pdf`}
														>
															<FontAwesomeIcon
																icon={faFilePdf}
																className="text-xl opacity-70 transition hover:opacity-90"
															/>
														</PDFDownloadLink>
													</button>
													<button className="ml-auto mr-4 capitalize underline">
														edit
													</button>
													<button className=" mr-4" onClick={handleVisibility}>
														{entry.visible ? (
															<FontAwesomeIcon icon={faEye} />
														) : (
															<FontAwesomeIcon
																icon={faEyeSlash}
																className="text-gray-500"
															/>
														)}
													</button>
												</li>
											))}
									</ul>
								</div>
							);
						})}
					</section>
				</div>
			</main>
		</>
	);
};

export default CompareZones;
