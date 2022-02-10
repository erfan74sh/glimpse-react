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
				//? get all projects in currentSubset
				const allProjects = await response.data;
				const list = Array.from(allProjects, (project) => project.project_name);
				const uniqueListOfProjectWithZoneName = Array.from(
					new Set(list),
					(project) => {
						const firstZone = allProjects.find(
							(el) => el.project_name === project
						).zone_name;
						return { project_name: project, zone_name: firstZone };
					}
				);
				setVisualComfortProjects(uniqueListOfProjectWithZoneName);
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
