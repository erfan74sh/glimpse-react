import React, { useState, useEffect } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
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

const LocationTooltip = ({ location }) => {
	const selected = markers.filter((marker) => marker.name === location)[0];
	return (
		<Overlay anchor={selected.latLng} offset={[0, 0]}>
			<div className="flex flex-col bg-gray-600 p-2 rounded-md bg-opacity-50">
				<span>city:{selected.name}</span> <span>climate:{selected.name}</span>
			</div>
		</Overlay>
	);
};

const ModalMap = () => {
	const [center, setCenter] = useState(initialCenter);
	const [zoom, setZoom] = useState(5);
	const { values } = useFormikContext();
	useEffect(() => {
		if (values.location !== "") {
			const selected = markers.filter(
				(marker) => marker.name === values.location
			)[0];
			setCenter(selected.latLng);
			setZoom(10);
		}
	}, [values.location]);
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
					<Marker anchor={marker.latLng} width={40} color="#147CDD" key={idx} />
				))}
			</Map>
		</div>
	);
};

export default ModalMap;
