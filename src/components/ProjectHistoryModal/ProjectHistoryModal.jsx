import React from "react";
import { Link } from "react-router-dom";

const ProjectHistoryModal = () => {
	return (
		<ul>
			<li className="px-2 py-3 w-133 bg-white shadow-full-sm rounded-md">
				<Link to="#" className="flex items-center justify-between">
					<span>1 - project name</span>
					<span>Last edit :1/2/2022</span>
				</Link>
			</li>
		</ul>
	);
};

export default ProjectHistoryModal;
