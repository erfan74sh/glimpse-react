import React from "react";
import { Link } from "react-router-dom";

const ProjectHistoryModal = () => {
	return (
		<ul>
			<li>
				<Link to="#">
					<span>1 - project name</span>
					<span>Last edit :1/2/2022</span>
				</Link>
			</li>
		</ul>
	);
};

export default ProjectHistoryModal;
