import React from "react";

const VisualMaterial = () => {
	return (
		<>
			<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
				details
			</h2>
			<div className="">
				<div className="w-full flex flex-col gap-y-10 justify-center px-10 pt-5">
					<div className="flex gap-x-10 justify-center">
						<aticle className="inline-block w-52 h-52 rounded-2xl bg-gray-400">
							<span>wall</span>
						</aticle>
						<aticle className="inline-block w-52 h-52 rounded-2xl bg-gray-400">
							<span>roof</span>
						</aticle>
					</div>
					<div className="flex gap-x-10 justify-center">
						<aticle className="inline-block w-52 h-52 rounded-2xl bg-gray-400">
							<span>floor</span>
						</aticle>
						<aticle className="inline-block w-52 h-52 rounded-2xl bg-gray-400">
							<span>window</span>
						</aticle>
					</div>
				</div>
			</div>
		</>
	);
};

export default VisualMaterial;
