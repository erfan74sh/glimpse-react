import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PDFDownloadLink } from "@react-pdf/renderer";
// components
import Chart from "../Chart";
import PdfDoc from "../PdfDoc";
import PointsAndGrades from "../PiontsAndGrades/PointsAndGrades";
// icons
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
// services
import energyConsumptionServices from "../../../../services/estimations/energyConsumption.service";
import visualComfortServices from "../../../../services/estimations/visualComfort.service";

const CompareZones = () => {
	const [searchParams] = useSearchParams();
	const currentSubset = searchParams.get("subset");
	const currentProjectName = searchParams.get("project_name");

	const [zones, setZones] = useState([]);
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
			// console.log(response);
			setZones(response?.data);
		};
		fetchData();
	}, [currentProjectName, currentSubset]);

	const [series, setSeries] = useState([]);
	useEffect(() => {
		const unitOptions = {
			x_dim: "m",
			y_dim: "m",
			rotation_angle: "deg",
			wwr_north: "%",
			wwr_south: "%",
			shading_type: "",
			hvac: "",
			wall_uvalue: "w/m.k",
			roof_uvalue: "w/m.k",
			floor_uvalue: "w/m.k",
			window_uvalue: "w/m.k",
			natural_ventilation: "",
			south_neighbor_distance: "m",
			south_neighbor_height: "m",
			north_neighbor_distance: "m",
			north_neighbor_height: "m",
			number_of_floor: "",
			south_wall_bc: "",
			north_wall_bc: "",
			east_wall_bc: "",
			west_wall_bc: "",
			floor_bc: "",
			roof_bc: "",

			coolingload: "kWh/m2",
			heatingload: "kWh/m2",
			electriclight: "kWh/m2",
			fanger20: "",
			fanger10: "",
			adaptiveashrae80: "",
			adaptiveashrae90: "",
			adaptiveencalss2por: "",
			overheatot_occupied_hours: "",
			underheatot_occupied_hours: "",
			verheatdbt_occupied_hours: "",
			underheatdbt_occupied_hours: "",

			reflectance_wall: "",
			reflectance_celing: "",
			reflectance_floor: "",
			vt_glass: "",

			udi: "",
			mda: "",
			svd: "",
			ase: "",
			sda: "",
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
		const outputs = zones.map((output, idx) => {
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
					item === "underheatdbt_occupied_hours"
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
		console.log("test", outputs);
	}, [zones]);

	const handleVisibility = (e) => {
		const name = e.currentTarget.parentNode.dataset.name;
		let temState = [...series];
		let item = temState.filter((entry) => entry.name === name)[0];
		item.visible = !item.visible;
		setSeries(temState);
	};

	return (
		<main className=" px-24 py-16" id="compare-zone__main">
			<header className="mb-10">
				<h1 className="border-blue-550 text-blue-550 border-l-8 pl-3 text-3xl font-bold uppercase leading-8">
					compare zones
				</h1>
			</header>
			<main className="">
				<section className="max-h-152 flex items-center justify-center overflow-hidden">
					{series.length > 0 ? <Chart series={series} /> : "loading..."}
				</section>
				<section className="mt-18">
					<h2 className="mb-4 px-8 text-xl font-normal uppercase">
						points and grades
					</h2>
					<PointsAndGrades />
				</section>
				<section className="mt-20 flex h-96 flex-col px-40">
					<header className="mx-8 mb-9 flex items-center justify-between border-b border-gray-500 pb-2 text-xl font-normal uppercase">
						<h2>zone name</h2>
					</header>
					<ul className="flex flex-col gap-y-9">
						{series.map((entry, i) => (
							<>
								<li
									key={i}
									className="shadow-full-sm relative mx-16 flex content-between items-center rounded-md bg-white px-4 py-3.5 text-sm"
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
										<Link to="/estimation">edit</Link>
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
							</>
						))}
					</ul>
				</section>
			</main>
		</main>
	);
};

export default CompareZones;
