import React from "react";

import ProjectsInSubset from "./ProjectsInSubset";

const ProjectHistoryModal = () => {
	return (
		<>
			<ProjectsInSubset subset="visual comfort" />
			<ProjectsInSubset subset="energy consumption" />
		</>
	);
};

export default ProjectHistoryModal;
