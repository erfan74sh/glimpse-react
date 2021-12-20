import React from "react";
import { useParams } from "react-router-dom";

const Zone = () => {
	const params = useParams();
	return <div>zone: {params.zoneId}</div>;
};

export default Zone;
