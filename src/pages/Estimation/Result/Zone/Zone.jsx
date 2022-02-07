import React, { useEffect, useState } from "react";
import {
	Link,
	// useParams
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PDFDownloadLink } from "@react-pdf/renderer";
// components
import Chart from "../Chart";
import PdfDoc from "../PdfDoc";
import PointsAndGrades from "../PiontsAndGrades/PointsAndGrades";
// icons
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
const Zone = () => {
	// const params = useParams();
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
					{ name: "floor level", uv: 400, amt: 5 },
					{ name: "X- Dimention", uv: 400, amt: 24 },
					{ name: "Y- Dimention", uv: 450, amt: 10 },
					{ name: "rotation angle", uv: 450, amt: 20 },
					{ name: "WWR south", uv: 450, amt: 80 },
					{ name: "WWR north", uv: 450, amt: 80 },
					{ name: "south Shading type", uv: 410, amt: 45 },
					{ name: "boundry condition east wall", uv: 410, amt: 55 },
					{ name: "boundry condition west wall", uv: 410, amt: 50 },
					{ name: "boundry condition north wall", uv: 410, amt: 60 },
					{ name: "boundry condition south wall", uv: 410, amt: 10 },
					{ name: "boundry condition roof", uv: 410, amt: 35 },
					{ name: "boundry condition floor", uv: 410, amt: 20 },
					{ name: "wall u-value", uv: 380, amt: 70 },
					{ name: "roof u-value", uv: 380, amt: 50 },
					{ name: "floor u-value", uv: 380, amt: 40 },
					{ name: "window u-value", uv: 380, amt: 5 },
					{ name: "south neighbor distance", uv: 380, amt: 35 },
					{ name: "south neighbor height", uv: 380, amt: 25 },
					{ name: "north neighbor distance", uv: 380, amt: 40 },
					{ name: "north neighbor height", uv: 380, amt: 10 },
					{ name: "HVAC", uv: 380, amt: 30 },
					{ name: "natural ventilation", uv: 380, amt: 15 },
					{ name: "cooling load", uv: 410, amt: 70 },
					{ name: "heating load", uv: 410, amt: 40 },
					{ name: "electric light", uv: 410, amt: 20 },
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
					{ name: "floor level", uv: 400, amt: 2 },
					{ name: "X- Dimention", uv: 400, amt: 8 },
					{ name: "Y- Dimention", uv: 450, amt: 20 },
					{ name: "rotation angle", uv: 450, amt: 40 },
					{ name: "WWR south", uv: 450, amt: 80 },
					{ name: "WWR north", uv: 450, amt: 50 },
					{ name: "south Shading type", uv: 410, amt: 20 },
					{ name: "boundry condition east wall", uv: 410, amt: 10 },
					{ name: "boundry condition west wall", uv: 410, amt: 90 },
					{ name: "boundry condition north wall", uv: 410, amt: 40 },
					{ name: "boundry condition south wall", uv: 410, amt: 60 },
					{ name: "boundry condition roof", uv: 410, amt: 10 },
					{ name: "boundry condition floor", uv: 410, amt: 70 },
					{ name: "wall u-value", uv: 380, amt: 30 },
					{ name: "roof u-value", uv: 380, amt: 50 },
					{ name: "floor u-value", uv: 380, amt: 20 },
					{ name: "window u-value", uv: 380, amt: 10 },
					{ name: "south neighbor distance", uv: 380, amt: 4 },
					{ name: "south neighbor height", uv: 380, amt: 10 },
					{ name: "north neighbor distance", uv: 380, amt: 30 },
					{ name: "north neighbor height", uv: 380, amt: 40 },
					{ name: "HVAC", uv: 380, amt: 5 },
					{ name: "natural ventilation", uv: 380, amt: 50 },
					{ name: "cooling load", uv: 410, amt: 65 },
					{ name: "heating load", uv: 410, amt: 80 },
					{ name: "electric light", uv: 410, amt: 35 },
				],
			},
		];
		setSeries(data);
	}, []);

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
			<PointsAndGrades />
			<section className="mt-20 flex h-96 flex-col px-40">
				<header className="mx-8 mb-9 flex items-center justify-between border-b border-gray-500 pb-2 text-xl font-normal uppercase">
					<h2>alternatives</h2>
				</header>
				<ul className="flex flex-col gap-y-9">
					{series.map((entry, i) => (
						<>
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
						</>
					))}
				</ul>
			</section>
		</>
	);
};

export default Zone;
