import React from "react";
import { Map, Marker } from "pigeon-maps";
// constants
import { contactUsInfo } from "../../constants";

const ContactUsMap = () => {
	return (
		<div>
			<Map
				height={250}
				defaultZoom={15}
				defaultCenter={contactUsInfo.location.latLong}
			>
				<Marker
					anchor={contactUsInfo.location.latLong}
					width={40}
					color="#147CDD"
				/>
			</Map>
		</div>
	);
};

export default ContactUsMap;
