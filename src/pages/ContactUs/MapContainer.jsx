import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={15}
				initialCenter={{
					lat: 35.79911916713814,
					lng: 51.394691793335404,
				}}
			>
				<Marker onClick={this.onMarkerClick} name={"Current location"} />
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyAJ141ObenmuFdj9mIj7YogQBoS7vstB0U",
})(MapContainer);