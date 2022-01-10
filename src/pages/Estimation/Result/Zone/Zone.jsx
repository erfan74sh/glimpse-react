import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PDFDownloadLink } from "@react-pdf/renderer";
// components
import Chart from "../Chart";
import PdfDoc from "../PdfDoc";
import PointsAndGrades from "../PiontsAndGrades/PointsAndGrades";
// icons
import {
	faEye,
	faEyeSlash,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
// assets
import ModelImage from "../../../../assets/images/3dmodel-result.png";
import PDFIcon from "../../../../assets/images/pdf-icon.png";

const Zone = () => {
	const params = useParams();
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
	const handleShowResultDropdown = (e) => {
		const name = e.currentTarget.parentNode.dataset.name;
		let tempState = [...series];
		let item = tempState.filter((entry) => entry.name === name)[0];
		item.showDropdown = !item.showDropdown;
		setSeries(tempState);
	};
	return (
		<>
			<section className="flex justify-center items-center max-h-152 overflow-hidden">
				<Chart series={series} />
			</section>
			<section className="mt-18">
				<h2 className="mb-4 px-8 text-xl font-normal uppercase">
					points and grades
				</h2>
				<PointsAndGrades />
			</section>
			<section className="flex flex-col h-96 px-40 mt-20">
				<header className="flex items-center justify-between mb-9 mx-8 pb-2 border-b text-xl font-normal uppercase border-gray-500">
					<h2>alternatives</h2>
					<button className=" px-3 py-1 self-center text-base text-white rounded-md bg-blue-550 ">
						<Link to="/estimation">new alternative</Link>
					</button>
				</header>
				<ul className="flex flex-col gap-y-9">
					{series.map((entry, i) => (
						<>
							<li
								key={i}
								className="flex content-between items-center relative mx-16 px-4 py-3.5 text-sm rounded-md shadow-full-sm bg-white"
								data-name={entry.name}
							>
								<article
									className={`${
										entry.showDropdown ? "visible" : "hidden"
									} block w-5/6 px-14 pt-5 pb-10 rounded-md bg-white absolute left-1/2 top-0 transform -translate-x-1/2 translate-y-16 z-10 shadow-full-sm`}
								>
									<div className="flex justify-between">
										<div>
											<h3 className="mb-5 font-bold text-blue-550 text-base uppercase">
												result
											</h3>
											<ul>
												<li>
													<span>parameter</span>
													<span>[unit]:</span>
													<span>10</span>
												</li>
												<li>
													<span>parameter</span>
													<span>[unit]:</span>
													<span>10</span>
												</li>
												<li>
													<span>parameter</span>
													<span>[unit]:</span>
													<span>10</span>
												</li>
												<li>
													<span>parameter</span>
													<span>[unit]:</span>
													<span>10</span>
												</li>
												<li>
													<span>parameter</span>
													<span>[unit]:</span>
													<span>10</span>
												</li>
												<li>
													<span>parameter</span>
													<span>[unit]:</span>
													<span>10</span>
												</li>
												<li>
													<span>parameter</span>
													<span>[unit]:</span>
													<span>10</span>
												</li>
											</ul>
										</div>
										<img src={ModelImage} alt="model" />
									</div>
									<button className="absolute top-5 right-5">
										<PDFDownloadLink
											document={<PdfDoc />}
											fileName={`${entry.name}.pdf`}
										>
											<img src={PDFIcon} alt="download pdf icon" />
										</PDFDownloadLink>
									</button>
								</article>
								<span className="font-bold">{i + 1} -&nbsp; </span>{" "}
								<span>{` ${entry.name}`}</span>
								<span className="ml-1 text-xs">({entry.date})</span>
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
								<button
									className="relative text-base leading-5 text-gray-500"
									onClick={handleShowResultDropdown}
								>
									<FontAwesomeIcon
										icon={faCaretDown}
										className={`${
											entry.showDropdown ? "transform rotate-180" : ""
										} transition-all`}
									/>
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
