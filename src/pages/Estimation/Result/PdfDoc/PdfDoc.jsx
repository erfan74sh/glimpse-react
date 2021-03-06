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
// constants
import {
	unitOptions,
	shadingTypeENums,
	boundryConditionENums,
	hvacENums,
	floorLevelENums,
	wallUValueENums,
	floorUValueENums,
	roofUValueENums,
	windowUValueENums,
} from "../../../../constants";

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
		paddingBottom: 50,
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

	section__points_grades: {
		display: "flex",
		flexDirection: "column",
		paddingHorizontal: 5,
	},

	section__points_grades__param: {
		display: "flex",
		flexDirection: "row",
		marginBottom: 7,
	},

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

	section_inputs_thermal_content: {
		display: "flex",
		flexDirection: "column",
		paddingHorizontal: 5,
	},
	section_inputs_thermal_content_item: {
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

	text_red: {
		color: "#EF4444",
	},
	text_blue: {
		color: "#3B82F6",
	},
	text_title: {
		color: "#3B82F6",
		fontWeight: "bold",
		marginRight: 5,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		// width: "7%",
		minWidth: "7%",
	},
});

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
				<View style={styles.header} fixed={true}>
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
											{floorLevelENums[inputs.number_of_floor]}
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
											{inputs.y_dim} {unitOptions.y_dim}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Length: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.x_dim} {unitOptions.x_dim}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>WWR_North: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.wwr_north * 100} {unitOptions.wwr_north}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>WWR_South: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.wwr_south * 100} {unitOptions.wwr_south}
										</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>Shading Type: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{shadingTypeENums[inputs.shading_type]}
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
											{hvacENums[inputs.hvac]}
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
								<View style={styles.section_inputs_thermal_content}>
									<View style={styles.section_inputs_thermal_content_item}>
										<Text>Wall U Value: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.wall_uvalue} {unitOptions.wall_uvalue}{" "}
											{`(${wallUValueENums[inputs.wall_uvalue]})`}
										</Text>
									</View>
									<View style={styles.section_inputs_thermal_content_item}>
										<Text>Floor U Value: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.floor_uvalue} {unitOptions.floor_uvalue}{" "}
											{`(${floorUValueENums[inputs.floor_uvalue]})`}
										</Text>
									</View>
									<View style={styles.section_inputs_thermal_content_item}>
										<Text>Roof U Value: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.roof_uvalue} {unitOptions.roof_uvalue}{" "}
											{`(${roofUValueENums[inputs.roof_uvalue]})`}
										</Text>
									</View>
									<View style={styles.section_inputs_thermal_content_item}>
										<Text>Window U Value: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.window_uvalue} {unitOptions.window_uvalue}{" "}
											{`(${windowUValueENums[inputs.window_uvalue]})`}
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
											{boundryConditionENums[inputs.east_wall_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>West Wall Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionENums[inputs.west_wall_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>North Wall Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionENums[inputs.north_wall_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>South Wall Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionENums[inputs.south_wall_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>Roof Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionENums[inputs.roof_bc]}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>Floor Boundary Condition: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{boundryConditionENums[inputs.floor_bc]}
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
								</View>
							</View>
							<View style={styles.section_output_col}>
								<View style={styles.section_outputs_items_content}>
									<View style={styles.section_outputs_items_content_item}>
										<Text>Adaptive ASHRAE 80%: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{outputs.adaptiveashrae80} {unitOptions.adaptiveashrae80}
										</Text>
									</View>
									<View style={styles.section_outputs_items_content_item}>
										<Text>Adaptive ASHRAE 90%: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{outputs.adaptiveashrae90} {unitOptions.adaptiveashrae90}
										</Text>
									</View>
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
					{/* end outputs section */}

					{/* points and grades section */}
					<View style={styles.section}>
						<Text
							style={[
								styles.section_header,
								{ marginTop: 14, borderBottom: "1 solid #147CDD" },
							]}
						>
							Points and Grades
						</Text>
						<View style={styles.section__points_grades}>
							<View style={styles.section__points_grades__param}>
								<View style={styles.text_title}>
									<Text>Primary Energy</Text>
									<Text>{`>`}</Text>
								</View>
								{outputs.primary_energy > 160 ? (
									<Text>
										Your alternative is{" "}
										<Text style={styles.text_red}>not acceptable</Text>.
									</Text>
								) : (
									<Text>
										Your alternative can earn{" "}
										<Text style={styles.text_blue}>
											{outputs.primary_energy >= 100
												? "EC"
												: outputs.primary_energy >= 80
												? "EC+"
												: outputs.primary_energy >= 35
												? "EC++"
												: "ECnZ"}
										</Text>
										rank from "19th topic of National Building Regulations of
										Iran".
									</Text>
								)}
							</View>
						</View>
					</View>
					{/* end points and grades section */}
				</View>
				{/* end main */}
			</Page>
		</Document>
	);
};

export default PdfDoc;
