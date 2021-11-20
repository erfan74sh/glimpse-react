import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// compoents
import Chart from "./Chart";
// style
import "./Result.scss";
// icons
import {
	faEye,
	faEyeSlash,
	faSortDown,
	faSortUp,
} from "@fortawesome/free-solid-svg-icons";

const Result = () => {
	const [series, setSeries] = useState([]);
	useEffect(() => {
		const data = [
			{
				name: "output_1",
				stroke: "#926ECB",
				opacity: 1,
				visible: true,
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
				stroke: "#00C48C",
				opacity: 1,
				visible: true,
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

	return (
		<main className=" px-24 py-16" id="result__main">
			<header className="mb-10">
				<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
					result
				</h1>
			</header>
			<main className="">
				<section className="flex justify-center items-center max-h-152 overflow-hidden">
					<Chart series={series} />
				</section>
				<section className="flex flex-col px-52 mt-20">
					<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						geometry
					</h2>
					<ul className="flex flex-col gap-y-9">
						{series.map((entry, i) => (
							<li
								key={i}
								className="flex content-between items-center mx-16 px-4 py-3.5 text-sm rounded-md shadow-xl bg-white"
								data-name={entry.name}
							>
								<span className="font-bold">{i + 1} -&nbsp; </span>{" "}
								<span>{` ${entry.name}`}</span>
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
								<button className="relative bottom-1 text-base leading-5 text-gray-500">
									<FontAwesomeIcon icon={faSortDown} />
								</button>
							</li>
						))}
					</ul>
				</section>
			</main>
		</main>
	);
};

export default Result;
