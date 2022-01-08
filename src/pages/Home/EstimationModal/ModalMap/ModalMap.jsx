import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { useFormikContext } from "formik";

const mapContainerStyle = {
	width: "65vw",
	height: "55vh",
};
const initialCenter = [32.42791, 53.688046];

const markers = [
	{ name: "tehran", latLng: [35.689198, 51.388973] },
	{ name: "yazd", latLng: [31.897423, 54.356857] },
	{ name: "bushehr", latLng: [28.919979, 50.830009] },
	{ name: "sari", latLng: [36.514051, 53.0484] },
];

const ModalMap = () => {
	const [center, setCenter] = useState(initialCenter);
	const [zoom, setZoom] = useState(5);
	const { values } = useFormikContext();
	console.log(values);
	return (
		<div>
			<Map
				height={mapContainerStyle.height}
				width={mapContainerStyle.width}
				center={center}
				zoom={zoom}
				onBoundsChanged={({ center, zoom }) => {
					setCenter(center);
					setZoom(zoom);
				}}
			>
				{markers.map((marker, idx) => (
					<Marker anchor={marker.latLng} key={idx} />
				))}
			</Map>
			<button
				onClick={() => {
					setCenter([36.514051, 53.0484]);
					setZoom(7);
				}}
			>
				change
			</button>
		</div>
	);
};

export default ModalMap;
