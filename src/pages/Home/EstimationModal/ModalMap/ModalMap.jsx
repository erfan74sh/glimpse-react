import React from "react";
import { Map, Marker } from "pigeon-maps";

const mapContainerStyle = {
	width: "65vw",
	height: "55vh",
};
const center = [32.42791, 53.688046];

const markers = [
	{ name: "tehran", latLng: [32.654629, 51.667984] },
	{ name: "yazd", latLng: [38.096237, 46.2738] },
	{ name: "bushehr", latLng: [29.591768, 52.583698] },
	{ name: "mazandaran", latLng: [29.591768, 52.583698] },
];

const ModalMap = () => {
	return (
		<div>
			<Map
				height={mapContainerStyle.height}
				width={mapContainerStyle.width}
				defaultCenter={center}
				defaultZoom={5}
			>
				{markers.map((marker, idx) => (
					<Marker anchor={marker.latLng} key={idx} />
				))}
			</Map>
		</div>
	);
};

export default ModalMap;
