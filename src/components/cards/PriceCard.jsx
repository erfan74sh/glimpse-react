import React from "react";
import { Link } from "react-router-dom";

const PriceCard = ({ period, options, price }) => {
	return (
		<article>
			<Link to="#">
				<h4>{period && period}</h4>
				<ul>
					{options && options.map((option, idx) => <li key={idx}>{option}</li>)}
				</ul>
				<span>{price ? `${price} هزار تومان` : "رایگان"}</span>
			</Link>
		</article>
	);
};

export default PriceCard;
