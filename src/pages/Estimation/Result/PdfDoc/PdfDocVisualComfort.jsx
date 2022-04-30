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
import { unitOptions, shadingTypeENums } from "../../../../constants";

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
		width: "7%",
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
				<View style={styles.header}>
					<Text>Visual Comfort simulation results</Text>
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

							{/*	 Materials */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>Materials</Text>
								<View style={styles.section_inputs_items_content}>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>Wall Reflectance Factor: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.reflectance_wall}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>Ceiling Reflectance Factor: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.reflectance_celing}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>Floor Reflectance Factor: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.reflectance_floor}
										</Text>
									</View>
									<View
										style={styles.section_inputs_items_content_item_halfWidth}
									>
										<Text>Window Glass Visible Transmittance Factor: </Text>
										<Text
											style={styles.section_inputs_items_content_item_value}
										>
											{inputs.vt_glass}
										</Text>
									</View>
								</View>
							</View>
							{/*	 end Materials */}
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
											<Text>UDI(Useful Daylight Illuminance): </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.udi} {unitOptions.udi}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>mDA(Mean Daylight Autonomy): </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.mda} {unitOptions.mda}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>sVD(Spatial Visual Discomfort): </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.svd} {unitOptions.svd}
											</Text>
										</View>
									</View>
								</View>
							</View>
							<View style={styles.section_output_col}>
								<View style={styles.section_inputs_items}>
									<View style={styles.section_outputs_items_content}>
										<View style={styles.section_outputs_items_content_item}>
											<Text>ASE(Annual Sunlight Exposure): </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.ase} {unitOptions.ase}
											</Text>
										</View>
										<View style={styles.section_outputs_items_content_item}>
											<Text>sDA(Spatial Daylight Autonomy): </Text>
											<Text
												style={styles.section_inputs_items_content_item_value}
											>
												{outputs.sda} {unitOptions.sda}
											</Text>
										</View>
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
									<Text>UDI</Text>
									<Text>{`>`}</Text>
								</View>
								{outputs.udi < 75 ? (
									<Text>
										Your alternative is{" "}
										<Text style={styles.text_red}>not acceptable</Text> in
										accordance with "LEED" V.4
									</Text>
								) : (
									<Text>
										Your alternative can earn{" "}
										<Text style={styles.text_blue}>
											{outputs.udi < 90 ? "2 points" : "3 points"}{" "}
										</Text>
										from "LEED" V.4
									</Text>
								)}
							</View>
							<View style={styles.section__points_grades__param}>
								<View style={styles.text_title}>
									<Text>mDA</Text>
									<Text>{`>`}</Text>
								</View>
								<Text>
									Your alternative is{" "}
									<Text
										style={
											outputs.mda >= 50 ? styles.text_blue : styles.text_red
										}
									>
										{outputs.mda >= 50 ? "acceptabe." : "not acceptable."}
									</Text>{" "}
								</Text>
							</View>
							<View style={styles.section__points_grades__param}>
								<View style={styles.text_title}>
									<Text>sVD</Text>
									<Text>{`>`}</Text>
								</View>
								<Text>
									Your alternative is{" "}
									<Text
										style={
											outputs.svd <= 10 ? styles.text_blue : styles.text_red
										}
									>
										{outputs.svd <= 10 ? "acceptabe." : "not acceptable."}
									</Text>{" "}
								</Text>
							</View>
							<View style={styles.section__points_grades__param}>
								<View style={styles.text_title}>
									<Text>ASE</Text>
									<Text>{`>`}</Text>
								</View>
								<Text>
									Your alternative is{" "}
									<Text
										style={
											outputs.ase <= 10 ? styles.text_blue : styles.text_red
										}
									>
										{outputs.ase <= 10 ? "acceptabe" : "not acceptable"}
									</Text>{" "}
									in accordance with "LEED" V.4
								</Text>
							</View>
							<View style={styles.section__points_grades__param}>
								<View style={styles.text_title}>
									<Text>sDA</Text>
									<Text>{`>`}</Text>
								</View>
								{outputs.sda < 55 ? (
									<Text style={{ flexGrow: 1 }}>
										Your alternative is{" "}
										<Text style={styles.text_red}>not acceptable</Text> in
										accordance with "19th topic of National Building Regulations
										of Iran"
									</Text>
								) : (
									<Text style={{ flexGrow: 1 }}>
										Your alternative can earn{" "}
										<Text style={styles.text_blue}>
											{outputs.sda < 75
												? "EC"
												: outputs.sda < 85
												? "EC+"
												: "EC++"}
										</Text>{" "}
										rank from "19th topic of National Building Regulations of
										Iran" and{" "}
										<Text style={styles.text_blue}>
											{outputs.sda < 75 ? "2 points" : "3 points"}{" "}
										</Text>
										from "LEED" V.4
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
