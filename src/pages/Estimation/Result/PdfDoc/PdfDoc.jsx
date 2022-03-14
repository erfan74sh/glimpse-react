import React, { useEffect, useState } from "react";
import {
	Page,
	Text,
	View,
	Image,
	Document,
	StyleSheet,
	Font,
} from "@react-pdf/renderer";
// fonts sources
import Roboto400 from "../../../../assets/fonts/Roboto/Roboto-Regular.ttf";
import Roboto500 from "../../../../assets/fonts/Roboto/Roboto-Medium.ttf";
import Roboto700 from "../../../../assets/fonts/Roboto/Roboto-Bold.ttf";
import Roboto900 from "../../../../assets/fonts/Roboto/Roboto-Black.ttf";

// assets
import Logo from "../../../../assets/images/logo-02.png";

// font registration
Font.register({
	family: "Roboto",
	fonts: [
		{ src: Roboto400 }, // font-style: normal, font-weight: normal
		{ src: Roboto500, fontWeight: 500 },
		{ src: Roboto700, fontWeight: 700 },
		{ src: Roboto900, fontWeight: 900 },
	],
});

// Create styles
const styles = StyleSheet.create({
	page: {
		fontSize: 12,
		fontFamily: "Roboto",
	},

	// header
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		color: "#147CDD",
		backgroundColor: "#323232",
		fontSize: 12,
		fontWeight: "semibold",
	},
	logoImage: {
		height: "auto",
		width: "25mm",
	},
	// end header

	// main sections
	main: {
		paddingVertical: 25,
		paddingHorizontal: 20,
	},
	//
	section: {},

	section_output: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	section_output_col: {
		width: "50%",
		display: "flex",
		flexDirection: "column",
	},

	section_header: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#147CDD",
		marginBottom: 10,
	},

	section_inputs_items: {
		marginVertical: 8,
	},
	section_inputs_items_title: {
		borderBottom: "1 solid #525252",
		marginBottom: 5,
		color: "#454545",
		fontWeight: "bold",
		fontSize: 13,
		textTransform: "capitalize",
	},

	section_inputs_items_content: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		paddingHorizontal: 5,
	},
	section_outputs_items_content: {
		display: "flex",
		flexDirection: "column",
		paddingHorizontal: 5,
	},

	section_inputs_items_content_item: {
		width: "33%",
		display: "flex",
		flexDirection: "row",
		marginVertical: 4,
		fontWeight: "medium",
		color: "#323232",
	},

	section_outputs_items_content_item: {
		display: "flex",
		flexDirection: "row",
		marginVertical: 4,
		fontWeight: "medium",
		color: "#323232",
	},

	section_inputs_items_content_item_halfWidth: {
		width: "50%",
		display: "flex",
		flexDirection: "row",
		marginVertical: 4,
		fontWeight: "medium",
		color: "#323232",
	},

	section_inputs_items_content_item_value: {
		fontWeight: "normal",
	},

	// end main sections
	informationsSec: {
		flexDirection: "column",
	},
	imageSec: {
		justifyContent: "center",
		width: "40vw",
		height: "auto",
	},
	flexGroup: {
		paddingVertical: 5,
		flexDirection: "row",
		fontSize: 14,
		fontWeight: "normal",
		textTransform: "capitalize",
	},
	test: {
		maxWidth: "100%",
	},
});

const unitOptions = {
	area: "m\u00B2",
	x_dim: "m",
	y_dim: "m",
	rotation_angle: "deg",
	wwr_north: "%",
	wwr_south: "%",
	shading_type: "",
	hvac: "",
	wall_uvalue: "W/m\u00B2K",
	roof_uvalue: "W/m\u00B2K",
	floor_uvalue: "W/m\u00B2K",
	window_uvalue: "W/m\u00B2K",
	natural_ventilation: "",
	south_neighbor_distance: "m",
	south_neighbor_height: "m",
	north_neighbor_distance: "m",
	north_neighbor_height: "m",
	number_of_floor: "",
	south_wall_bc: "",
	north_wall_bc: "",
	east_wall_bc: "",
	west_wall_bc: "",
	floor_bc: "",
	roof_bc: "",

	coolingload: "kWh/m\u00B2",
	heatingload: "kWh/m\u00B2",
	electriclight: "kWh/m\u00B2",
	fanger20: "%",
	fanger10: "%",
	adaptiveashrae80: "%",
	adaptiveashrae90: "%",
	adaptiveencalss2por: "%",
	overheatot_occupied_hours: "hr",
	underheatot_occupied_hours: "hr",
	verheatdbt_occupied_hours: "hr",
	underheatdbt_occupied_hours: "hr",

	reflectance_wall: "",
	reflectance_celing: "",
	reflectance_floor: "",
	vt_glass: "",

	udi: "%",
	mda: "%",
	svd: "%",
	ase: "%",
	sda: "%",
};

const shadingTypeOptions = {
	1: "Horizontal",
	2: "Horizontal Louvre",
	3: "Vertical",
	4: "All Modes",
};
const boundryConditionOptions = {
	0: "Adiabatic",
	1: "External",
	2: "Ground",
};

const hvacOptions = {
	1: "ideal air loads",
	2: "PTAC | residential",
	3: "PTHP | residential",
	4: "VAV w/reheat",
	5: "VAV w/PFP boxes",
	6: "fan coil units + DOAS",
};

const floorLevelOptions = {
	0: "Ground Floor",
	1: "1st Floor",
	2: "2nd Floor",
	3: "3rd Floor",
	4: "4th Floor",
	5: "5th Floor",
};

const PdfDoc = ({ data }) => {
	const [inputs, setInputs] = useState({});
	useEffect(() => {
		if (data.inputData) {
			let tempInput = {};
			data.inputData.forEach((element) => {
				tempInput[element.name] = element.amt;
			});
			setInputs(tempInput);
		}
	}, [data]);

	const [outputs, setOutputs] = useState({});
	useEffect(() => {
		let tempOutputs = {};
		data.data.forEach((element) => {
			tempOutputs[element.name] = element.amt;
		});
		setOutputs(tempOutputs);
	}, [data]);

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* header */}
				<View style={styles.header}>
					<Text>Energy Demand simulation results</Text>
					<Image src={Logo} style={styles.logoImage} />
				</View>
				{/* end header */}
				{/* main */}
				<View style={styles.main}>
					{/* inputs section */}
					<View style={styles.section}>
						<Text style={styles.section_header}>Input Parameters</Text>
						<View style={styles.section_inputs}>
							{/* general specifivations section */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									General specifications
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Project Name: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{data.project_name}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Zone Name: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{data.zone_name}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Alternative Name: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{data.alternative_name}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Location: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{data.location}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Building Type: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{data.building_program}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Area: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{outputs.area} {unitOptions.area}
										</Text>
									</View>
								</View>
							</View>
							{/* end general specifivations section */}
							{/*	 geometry section */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									geometry specifications
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Floor Level: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{floorLevelOptions[inputs.number_of_floor]}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Rotation Angle: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.rotation_angle} {unitOptions.rotation_angle}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Width: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.x_dim} {unitOptions.x_dim}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Length: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.y_dim} {unitOptions.y_dim}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>WWR_North: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.wwr_north} {unitOptions.wwr_north}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>WWR_South: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.wwr_south} {unitOptions.wwr_south}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Shading Type: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{shadingTypeOptions[inputs.shading_type]}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>South Neighbor Distance: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.south_neighbor_distance}{" "}
											{unitOptions.south_neighbor_distance}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>South Neighbor Height: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.south_neighbor_height}{" "}
											{unitOptions.south_neighbor_height}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>North Neighbor Distance: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.north_neighbor_distance}{" "}
											{unitOptions.north_neighbor_distance}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>North Neighbor Height: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.north_neighbor_height}{" "}
											{unitOptions.north_neighbor_height}
										</Text>
									</View>
								</View>
							</View>
							{/*	 end geometry section */}
							{/*	 air conditioning section */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									air conditioning
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>HVAC System: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{hvacOptions[inputs.hvac]}
										</Text>
									</View>
									<View
										style={[
											styles.section_inputs_items_content_item_halfWidth,
											{ flexGrow: 1 },
										]}
									>
										<Text>Natural Ventilation: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.natural_ventilation ? " On" : " Off"}
										</Text>
									</View>
								</View>
							</View>
							{/*	 end air conditioning section */}
							{/*	 Thermal specifications section */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									Thermal Properties
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Wall U Value: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.wall_uvalue} {unitOptions.wall_uvalue}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Floor U Value: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.floor_uvalue} {unitOptions.floor_uvalue}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Roof U Value: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.roof_uvalue} {unitOptions.roof_uvalue}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Window U Value: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.window_uvalue} {unitOptions.window_uvalue}
										</Text>
									</View>
								</View>
							</View>
							{/*	 end Thermal specifications section */}
							{/*	 boundry condition section */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									boundary conditions
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>East Wall Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionOptions[inputs.east_wall_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>West Wall Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionOptions[inputs.west_wall_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>North Wall Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionOptions[inputs.north_wall_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>South Wall Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionOptions[inputs.south_wall_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>Roof Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionOptions[inputs.roof_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>Floor Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionOptions[inputs.floor_bc]}
										</Text>
									</View>
								</View>
							</View>
							{/*	 end boundry condition section */}
						</View>
					</View>
					{/* end inputs section */}

					{/* outputs section */}
					<View style={styles.section}>
						<Text
							style={[
								styles.section_header,
								{ marginTop: 14, borderBottom: "1 solid #147CDD" },
							]}
						>
							Output Metrics
						</Text>
						<View style={styles.section_output}>
							<View style={styles.section_output_col}>
								<View style={styles.section_inputs_items}>
									<View style={styles.section_outputs_items_content}>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Total energy: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.total_energy} {unitOptions.coolingload}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Primary energy: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.primary_energy} {unitOptions.coolingload}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Cooling Load: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.coolingload} {unitOptions.coolingload}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Heating Load: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.heatingload} {unitOptions.heatingload}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Electric Lighting: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.electriclight} {unitOptions.electriclight}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Fanger 80%: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.fanger20} {unitOptions.fanger20}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Fanger 90%: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.fanger10} {unitOptions.fanger10}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Adaptive ASHRAE 80%: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.adaptiveashrae80}{" "}
												{unitOptions.adaptiveashrae80}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Adaptive ASHRAE 90%: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.adaptiveashrae90}{" "}
												{unitOptions.adaptiveashrae90}
											</Text>
										</View>
									</View>
								</View>
							</View>
							<View style={styles.section_output_col}>
								<View style={styles.section_inputs_items}>
									<View style={styles.section_outputs_items_content}>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Adaptive EN-Class: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.adaptiveencalss2por}{" "}
												{unitOptions.adaptiveencalss2por}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Overheat OT-Occupied Hours: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.overheatot_occupied_hours}{" "}
												{unitOptions.overheatot_occupied_hours}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Underheat OT-Occupied Hours: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.underheatot_occupied_hours}{" "}
												{unitOptions.underheatot_occupied_hours}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Overheat DbT-Occupied Hours: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.verheatdbt_occupied_hours}{" "}
												{unitOptions.verheatdbt_occupied_hours}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>Underheat DbT- Occupied Hours: </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.underheatdbt_occupied_hours}{" "}
												{unitOptions.underheatdbt_occupied_hours}
											</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					{/* end outputs section */}
				</View>
				{/* end main */}
			</Page>
		</Document>
	);
};

export default PdfDoc;
