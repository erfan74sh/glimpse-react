import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import visualComfortServices from "../../services/estimations/visualComfort.service";

const ProjectHistoryModal = () => {
	const [visualComfortProjects, setVisualComfortProjects] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await visualComfortServices.getEstimations();
				console.log(response.data);
			} catch (error) {
				console.log("errore from projectHistoryModal:", error);
			}
		};
		fetchData();
	}, []);
	const [energyConsumptionProjects, setEnergyConsumptionProjects] = useState(
		[]
	);
	return (
		<ul className="flex flex-col gap-y-5 py-5">
			<li className="w-133 shadow-full-sm rounded-md bg-white">
				<Link
					to="#"
					className="flex items-center justify-between p-3 text-gray-600"
				>
					<span className="font-semibold ">1 - project name</span>
					<span className="text-xs">Last edit :1/2/2022</span>
				</Link>
			</li>
			<li className="w-133 shadow-full-sm rounded-md bg-white">
				<Link
					to="#"
					className="flex items-center justify-between p-3 text-gray-600"
				>
					<span className="font-semibold ">1 - project name</span>
					<span className="text-xs">Last edit :1/2/2022</span>
				</Link>
			</li>
			<li className="w-133 shadow-full-sm rounded-md bg-white">
				<Link
					to="#"
					className="flex items-center justify-between p-3 text-gray-600"
				>
					<span className="font-semibold ">1 - project name</span>
					<span className="text-xs">Last edit :1/2/2022</span>
				</Link>
			</li>
			<li className="w-133 shadow-full-sm rounded-md bg-white">
				<Link
					to="#"
					className="flex items-center justify-between p-3 text-gray-600"
				>
					<span className="font-semibold ">1 - project name</span>
					<span className="text-xs">Last edit :1/2/2022</span>
				</Link>
			</li>
			<li className="w-133 shadow-full-sm rounded-md bg-white">
				<Link
					to="#"
					className="flex items-center justify-between p-3 text-gray-600"
				>
					<span className="font-semibold ">1 - project name</span>
					<span className="text-xs">Last edit :1/2/2022</span>
				</Link>
			</li>
		</ul>
	);
};

export default ProjectHistoryModal;
