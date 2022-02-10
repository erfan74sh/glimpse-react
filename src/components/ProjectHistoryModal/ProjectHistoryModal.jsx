import React from "react";

import ProjectsInSubset from "./ProjectsInSubset";

const ProjectHistoryModal = () => {
	return (
		<>
			<ProjectsInSubset subset="visual_comfort" />
			<ProjectsInSubset subset="energy_consumption" />
		</>
	);
};

export default ProjectHistoryModal;
