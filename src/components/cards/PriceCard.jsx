import React from "react";
import { Link } from "react-router-dom";

const PriceCard = ({ period, simulationNumber, price }) => {
	return (
		<Link to="#">
			<h4>{period && period}</h4>
			<ul>
				<li>{simulationNumber && simulationNumber} عدد شبیه‌سازی</li>
			</ul>
			<span>{price ? `${price} هزار تومان` : "رایگان"}</span>
		</Link>
	);
};

export default PriceCard;
