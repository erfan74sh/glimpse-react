import React from "react";
import { Map, Marker } from "pigeon-maps";

const mapContainerStyle = {
	width: "100%",
	height: "250px",
};
const companyLocation = [35.796784220168966, 51.39476019337767];

const ContactUsMap = () => {
	return (
		<div>
			<Map
				height={mapContainerStyle.height}
				width={mapContainerStyle.width}
				defaultZoom={15}
				defaultCenter={companyLocation}
			>
				<Marker anchor={companyLocation} width={40} color="#147CDD" />
			</Map>
		</div>
	);
};

export default ContactUsMap;
