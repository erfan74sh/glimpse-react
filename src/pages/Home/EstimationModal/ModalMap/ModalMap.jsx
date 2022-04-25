import React, { useState, useEffect } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import { useFormikContext } from "formik";

const initialCenter = [32.42791, 53.688046];

const markers = [
	{ name: "tehran", latLng: [35.689198, 51.388973], climate: "Bsk.Bwk" },
	{ name: "yazd", latLng: [31.897423, 54.356857], climate: "Bwk" },
	{ name: "tabriz", latLng: [38.0739964, 46.2961952], climate: "Bsk" },
	{ name: "bushehr", latLng: [28.8936645, 51.3204877], climate: "?" },
	{ name: "sari", latLng: [36.5659598, 53.0587229], climate: "?" },
];

const ModalMap = () => {
	const [center, setCenter] = useState(initialCenter);
	const [zoom, setZoom] = useState(4.7);
	const { values } = useFormikContext();
	const selected = markers.filter(
		(marker) => marker.name === values.location
	)[0];
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
		<div className="h-100 lg:w-160">
			<Map
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
				{values.location !== "" && (
					<Overlay anchor={selected.latLng} offset={[0, 0]}>
						<div className="flex flex-col rounded-md bg-gray-500 bg-opacity-50 py-2 px-3">
							<div className="flex gap-x-1">
								<span className="font-semibold">city:</span>
								<span>{selected.name}</span>
							</div>
							<div className="flex gap-x-1">
								<span className="font-semibold">climate:</span>
								<span> {selected.climate} </span>
							</div>
						</div>
					</Overlay>
				)}
			</Map>
		</div>
	);
};

export default ModalMap;
