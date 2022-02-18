import React from "react";
import { Link } from "react-router-dom";

const PriceCard = ({ period, options, price }) => {
	return (
		<Link to="#">
			<article className="hover:border-blue-550 hover:shadow-b-sm flex h-36 w-52 flex-col items-center gap-y-1.5 rounded-lg border-2 border-blue-400 bg-white py-3 px-2 text-lg transition-all">
				<h4>{period && period}</h4>
				<ul>
					{options && options.map((option, idx) => <li key={idx}>{option}</li>)}
				</ul>
				<span className="mt-auto font-bold">
					{price ? `${price} هزار تومان` : "رایگان"}
				</span>
			</article>
		</Link>
	);
};

export default PriceCard;
