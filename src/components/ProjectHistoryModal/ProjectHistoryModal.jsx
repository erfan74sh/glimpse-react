import React from "react";
import { Link } from "react-router-dom";

const ProjectHistoryModal = () => {
	return (
		<ul className="flex flex-col gap-y-5 py-5">
			<li className="w-133 bg-white shadow-full-sm rounded-md">
				<Link
					to="#"
					className="flex items-center justify-between p-3 text-gray-600"
				>
					<span className="font-semibold ">1 - project name</span>
					<span className="text-xs">Last edit :1/2/2022</span>
				</Link>
			</li>
			<li className="w-133 bg-white shadow-full-sm rounded-md">
				<Link
					to="#"
					className="flex items-center justify-between p-3 text-gray-600"
				>
					<span className="font-semibold ">1 - project name</span>
					<span className="text-xs">Last edit :1/2/2022</span>
				</Link>
			</li>
			<li className="w-133 bg-white shadow-full-sm rounded-md">
				<Link
					to="#"
					className="flex items-center justify-between p-3 text-gray-600"
				>
					<span className="font-semibold ">1 - project name</span>
					<span className="text-xs">Last edit :1/2/2022</span>
				</Link>
			</li>
			<li className="w-133 bg-white shadow-full-sm rounded-md">
				<Link
					to="#"
					className="flex items-center justify-between p-3 text-gray-600"
				>
					<span className="font-semibold ">1 - project name</span>
					<span className="text-xs">Last edit :1/2/2022</span>
				</Link>
			</li>
			<li className="w-133 bg-white shadow-full-sm rounded-md">
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
