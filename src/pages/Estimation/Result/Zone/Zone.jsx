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
	const currentProject = searchParams.get("project_name");
	const currentZone = searchParams.get("zone_name");

	useEffect(() => {
		const alts = projects.filter(
			(value) =>
				value.project_name === currentProject && value.zone_name === currentZone
		);
		const outputs = alts.map((output) => {
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
					outputData.push({ name: item, amt: output[item] });
				}
			}
			return {
				...primaryData,
				date: "2021.11.20",
				stroke: "#926ECB",
				opacity: 1,
				visible: true,
				showDropdown: false,
				data: outputData,
			};
		});
		console.log(outputs);
	}, [projects, currentProject, currentZone]);
	const [series, setSeries] = useState([]);
	useEffect(() => {
		const data = [
			{
				name: "output_1",
				date: "2021.11.20",
				stroke: "#926ECB",
				opacity: 1,
				visible: true,
				showDropdown: false,
				data: [
					{ name: "floor level", amt: 5 },
					{ name: "X- Dimention", amt: 24 },
					{ name: "Y- Dimention", amt: 10 },
					{ name: "rotation angle", amt: 20 },
					{ name: "WWR south", amt: 80 },
					{ name: "WWR north", amt: 80 },
					{ name: "south Shading type", amt: 45 },
					{ name: "boundry condition east wall", amt: 55 },
					{ name: "boundry condition west wall", amt: 50 },
					{ name: "boundry condition north wall", amt: 60 },
					{ name: "boundry condition south wall", amt: 10 },
					{ name: "boundry condition roof", amt: 35 },
					{ name: "boundry condition floor", amt: 20 },
					{ name: "wall u-value", amt: 70 },
					{ name: "roof u-value", amt: 50 },
					{ name: "floor u-value", amt: 40 },
					{ name: "window u-value", amt: 5 },
					{ name: "south neighbor distance", amt: 35 },
					{ name: "south neighbor height", amt: 25 },
					{ name: "north neighbor distance", amt: 40 },
					{ name: "north neighbor height", amt: 10 },
					{ name: "HVAC", amt: 30 },
					{ name: "natural ventilation", amt: 15 },
					{ name: "cooling load", amt: 70 },
					{ name: "heating load", amt: 40 },
					{ name: "electric light", amt: 20 },
				],
			},
			{
				name: "output_2",
				date: "2021.06.09",
				stroke: "#00C48C",
				opacity: 1,
				visible: true,
				showDropdown: false,
				data: [
					{ name: "floor level", amt: 2 },
					{ name: "X- Dimention", amt: 8 },
					{ name: "Y- Dimention", amt: 20 },
					{ name: "rotation angle", amt: 40 },
					{ name: "WWR south", amt: 80 },
					{ name: "WWR north", amt: 50 },
					{ name: "south Shading type", amt: 20 },
					{ name: "boundry condition east wall", amt: 10 },
					{ name: "boundry condition west wall", amt: 90 },
					{ name: "boundry condition north wall", amt: 40 },
					{ name: "boundry condition south wall", amt: 60 },
					{ name: "boundry condition roof", amt: 10 },
					{ name: "boundry condition floor", amt: 70 },
					{ name: "wall u-value", amt: 30 },
					{ name: "roof u-value", amt: 50 },
					{ name: "floor u-value", amt: 20 },
					{ name: "window u-value", amt: 10 },
					{ name: "south neighbor distance", amt: 4 },
					{ name: "south neighbor height", amt: 10 },
					{ name: "north neighbor distance", amt: 30 },
					{ name: "north neighbor height", amt: 40 },
					{ name: "HVAC", amt: 5 },
					{ name: "natural ventilation", amt: 50 },
					{ name: "cooling load", amt: 65 },
					{ name: "heating load", amt: 80 },
					{ name: "electric light", amt: 35 },
				],
			},
		];
		setSeries(data);
	}, []);

	// todo: get alternatives data from server and remove hardcodings
	const alternatives = [
		{
			name: "output 1",
			id: 1,
			outputs: {
				svd: 10,
				ase: 5,
				sda: 90,
				udi: 85,
			},
		},
		{
			name: "output 2",
			id: 1,
			outputs: {
				svd: 25,
				ase: 35,
				sda: 45,
				udi: 95,
			},
		},
	];

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
			<PointsAndGrades subset="visual comfort" alternatives={alternatives} />
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
									document={<PdfDoc />}
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
