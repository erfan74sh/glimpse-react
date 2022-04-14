import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// services
import visualComfortServices from "../../services/estimations/visualComfort.service";
import energyConsumptionServices from "../../services/estimations/energyConsumption.service";
import { logout } from "../../features/auth/authSlice";
// icons
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ProjectsInSubset = ({ subset }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [projectsInSubset, setProjectsInSubset] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				// todo: change condition for other subsets
				const response =
					subset === "visual comfort"
						? await visualComfortServices.getEstimations()
						: await energyConsumptionServices.getEstimations();

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
				setProjectsInSubset(uniqueListOfProjectWithZoneName);
			} catch (error) {
				console.log("error from projectHistoryModal:", error);
				if (error.response && error.response.status === 401) {
					dispatch(logout());
					navigate("/auth");
				}
			}
		};
		fetchData();
	}, [subset, dispatch, navigate]);

	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<article className="mb-2">
			<h4
				className="flex cursor-default items-center justify-between border-b-2 py-1"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<span className="text-gray-650 px-0.5 font-medium">{subset}</span>
				<span className="px-2">
					<FontAwesomeIcon
						icon={faCaretDown}
						className={`transform text-gray-500 transition-all delay-300 ${
							showDropdown && "rotate-180"
						}`}
					/>
				</span>
			</h4>
			<div
				className={`overflow-hidden transition-all duration-300 ${
					showDropdown ? "max-h-screen" : "max-h-0"
				}`}
			>
				<ul className="flex flex-col gap-y-5 py-5 px-2">
					{projectsInSubset.map((project, idx) => {
						return (
							<li
								className="w-133 shadow-full-sm rounded-md bg-white"
								key={idx}
							>
								<Link
									to={{
										pathname: "/result",
										search: `?subset=${
											subset === "visual comfort"
												? "visual_comfort"
												: "energy_consumption"
										}&project_name=${project.project_name}&zone_name=${
											project.zone_name
										}`,
									}}
									target="_blank"
									className="flex items-center justify-between p-3 text-gray-600"
								>
									<span className="font-semibold ">{`${idx + 1} _ ${
										project.project_name
									}`}</span>
									<span className="text-xs">Last edit :1/2/2022</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</article>
	);
};

export default ProjectsInSubset;
