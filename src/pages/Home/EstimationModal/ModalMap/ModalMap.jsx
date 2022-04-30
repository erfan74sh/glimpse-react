import React, { useState, useEffect } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import { useFormikContext } from "formik";
// constants
import { locationOptions } from "../../../../constants";

const initialCenter = [32.42791, 53.688046];

const ModalMap = () => {
	const [center, setCenter] = useState(initialCenter);
	const [zoom, setZoom] = useState(4.7);
	const { values } = useFormikContext();
	const selected = locationOptions.filter(
		(option) => option.value === values.location
	)[0];
	useEffect(() => {
		if (values.location !== "") {
			const selected = locationOptions.filter(
				(option) => option.value === values.location
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
				{locationOptions.map((option, idx) => (
					<Marker anchor={option.latLng} width={40} color="#147CDD" key={idx} />
				))}
				{values.location !== "" && (
					<Overlay anchor={selected.latLng} offset={[0, 0]}>
						<div className="flex flex-col rounded-md bg-gray-500 bg-opacity-50 py-2 px-3">
							<div className="flex gap-x-1">
								<span className="font-semibold">City:</span>
								<span>{selected.label}</span>
							</div>
							<div className="flex gap-x-1">
								<span className="font-semibold">Climate:</span>
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
