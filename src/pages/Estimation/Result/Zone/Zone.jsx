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

const Zone = ({ projects }) => {
	const [searchParams] = useSearchParams();
	const currentSubset = searchParams.get("subset");
	const currentProject = searchParams.get("project_name");
	const currentZone = searchParams.get("zone_name");

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
		const alts = projects.filter(
			(value) =>
				value.project_name === currentProject && value.zone_name === currentZone
		);
		const outputs = alts.map((output, idx) => {
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
				} else {
					outputData.push({
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
			};
		});
		setSeries(outputs);
	}, [projects, currentProject, currentZone]);

	const handleVisibility = (e) => {
		const name = e.currentTarget.parentNode.dataset.name;
		let temState = [...series];
		let item = temState.filter((entry) => entry.name === name)[0];
		item.visible = !item.visible;
		setSeries(temState);
	};
	return (
		<>
			<section className="max-h-152 flex items-center justify-center overflow-hidden">
				<Chart series={series} />
			</section>
			<PointsAndGrades subset={currentSubset} alternatives={series} />
			<section className="mt-20 flex h-96 flex-col px-40">
				<header className="mx-8 mb-9 flex items-center justify-between border-b border-gray-500 pb-2 text-xl font-normal uppercase">
					<h2>alternatives</h2>
				</header>
				<ul className="flex flex-col gap-y-9">
					{series.map((entry, i) => (
						<li
							key={i}
							className="shadow-full-sm relative mx-16 flex content-between items-center rounded-md bg-white px-4 py-3.5 text-sm"
							data-name={entry.name}
						>
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
					))}
				</ul>
			</section>
		</>
	);
};

export default Zone;
