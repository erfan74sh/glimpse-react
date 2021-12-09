import React from "react";

const Review = ({ handleStep }) => {
	const handlePrevStep = (e) => {
		handleStep(e);
	};

	return (
		<>
			<fieldset className="flex flex-col gap-y-9 pr-10">
				<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
					review
				</legend>
			</fieldset>
			<section className="flex justify-center gap-x-4 mt-auto mr-8 pr-10">
				<button
					type="button"
					className="flex items-center gap-x-1 px-6 py-2 text-white font-medium uppercase rounded-md bg-blue-550"
					onClick={handlePrevStep}
					value="site plan"
				>
					prev <span className="text-xs lowercase">(SitePlan)</span>
				</button>
			</section>
		</>
	);
};

export default Review;
