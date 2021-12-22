import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
	width: "70vw",
	height: "65vh",
};
const center = {
	lat: 32.42791,
	lng: 53.688046,
};

const ModalMap = () => {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyAJ141ObenmuFdj9mIj7YogQBoS7vstB0U",
	});
	if (loadError) return "error loading map";
	if (!isLoaded) return "loading map";

	return (
		<div>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={5}
				center={center}
			></GoogleMap>
		</div>
	);
};

export default ModalMap;
