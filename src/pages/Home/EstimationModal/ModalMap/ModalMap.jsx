import React from "react";
import { Map, Marker } from "pigeon-maps";

const mapContainerStyle = {
	width: "65vw",
	height: "55vh",
};
const center = [32.42791, 53.688046];

const markers = [
	{ lat: 32.654629, lng: 51.667984 },
	{ lat: 38.096237, lng: 46.2738 },
	{ lat: 29.591768, lng: 52.583698 },
];

const ModalMap = () => {
	return (
		<div>
			<Map
				height={mapContainerStyle.height}
				width={mapContainerStyle.width}
				defaultCenter={center}
				defaultZoom={5}
			></Map>
		</div>
	);
};

export default ModalMap;
