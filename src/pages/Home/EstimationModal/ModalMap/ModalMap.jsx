import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
	width: "70vw",
	height: "65vh",
};
const center = {
	lat: 32.42791,
	lng: 53.688046,
};

const markers = [
	{ lat: 32.654629, lng: 51.667984 },
	{ lat: 38.096237, lng: 46.2738 },
	{ lat: 29.591768, lng: 52.583698 },
];

const ModalMap = () => {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyAJ141ObenmuFdj9mIj7YogQBoS7vstB0U",
	});
	if (loadError) return "error loading map";
	if (!isLoaded) return "loading map";

	return (
		<div>
			<GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={center}>
				{markers.map((marker, idx) => (
					<Marker
						key={idx}
						position={{ lat: marker.lat, lng: marker.lng }}
						icon={{
							url: "/MapMarker.svg",
							scaledSize: new window.google.maps.Size(20, 20),
							origin: new window.google.maps.Point(0, 0),
							anchor: new window.google.maps.Point(10, 10),
						}}
					/>
				))}
			</GoogleMap>
		</div>
	);
};

export default ModalMap;
