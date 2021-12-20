import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PDFDownloadLink } from "@react-pdf/renderer";
// compoents
import BreadCrumps from "./Breadcrumps/BreadCrumps";
import Chart from "./Chart";
import PdfDoc from "./PdfDoc";
// style
import "./Result.scss";
// icons
import {
	faEye,
	faEyeSlash,
	faSortDown,
} from "@fortawesome/free-solid-svg-icons";
// assets
import ModelImage from "../../../assets/images/3dmodel-result.png";
import PDFIcon from "../../../assets/images/pdf-icon.png";

const Result = () => {
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
					{ name: "X- Dimention", uv: 400, amt: 8 },
					{ name: "Y- Dimention", uv: 450, amt: 20 },
					{ name: "Material", uv: 380, amt: 30 },
					{ name: "Shading", uv: 410, amt: 20 },
					{ name: "UDI", uv: 410, amt: 65 },
					{ name: "SDA", uv: 410, amt: 80 },
					{ name: "ASE", uv: 410, amt: 35 },
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
					{ name: "X- Dimention", uv: 400, amt: 10 },
					{ name: "Y- Dimention", uv: 450, amt: 30 },
					{ name: "Material", uv: 380, amt: 70 },
					{ name: "Shading", uv: 410, amt: 40 },
					{ name: "UDI", uv: 410, amt: 50 },
					{ name: "SDA", uv: 410, amt: 55 },
					{ name: "ASE", uv: 410, amt: 10 },
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
		<main className=" px-24 py-16" id="result__main">
			<header className="mb-10">
				<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
					result
				</h1>
				<nav>
					<BreadCrumps />
				</nav>
			</header>
			<main className="">
				<section className="flex justify-center items-center max-h-152 px-20 overflow-hidden">
					<Chart series={series} />
				</section>
				<section className="flex flex-col h-96 px-40 mt-20">
					<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						geometry
					</h2>
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
									<button className="ml-auto mr-4" onClick={handleVisibility}>
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
											icon={faSortDown}
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
			</main>
		</main>
	);
};

export default Result;
