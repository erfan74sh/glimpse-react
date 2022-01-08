import React from "react";
import { Map, Marker } from "pigeon-maps";

const mapContainerStyle = {
	width: "65vw",
	height: "55vh",
};
const center = [32.42791, 53.688046];

const markers = [
	{ name: "tehran", latLng: [35.689198, 51.388973] },
	{ name: "yazd", latLng: [31.897423, 54.356857] },
	{ name: "bushehr", latLng: [28.919979, 50.830009] },
	{ name: "sari", latLng: [36.514051, 53.0484] },
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
