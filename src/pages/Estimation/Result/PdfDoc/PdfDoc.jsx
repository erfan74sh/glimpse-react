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

	section_inputs_items: {
		marginVertical: 5,
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
	},

	section_inputs_items_content_item: {
		width: "30%",
		display: "flex",
		flexDirection: "row",
		marginVertical: 1,
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

const PdfDoc = ({ data }) => {
	const [inputs, setInputs] = useState({});
	useEffect(() => {
		let tempInput = {};
		data.inputData.forEach((element) => {
			tempInput[element.name] = element.amt;
		});
		setInputs(tempInput);
	}, [data]);

	const [outputs, setOutputs] = useState({});
	useEffect(() => {
		let tempOutputs = {};
		data.data.forEach((element) => {
			tempOutputs[element.name] = element.amt;
		});
		setOutputs(tempOutputs);
	}, [data]);

	console.log(data);
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* header */}
				<View style={styles.header}>
					<Text>Energy sector simulation results</Text>
					<Image src={Logo} style={styles.logoImage} />
				</View>
				{/* end header */}
				{/* main */}
				<View style={styles.main}>
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
										<Text>project name: </Text>
										<Text>{data.project_name}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>zone name: </Text>
										<Text>{data.zone_name}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>alternative name: </Text>
										<Text>{data.alternative_name}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>location: </Text>
										<Text>{data.location}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>building type: </Text>
										<Text>{data.building_program}</Text>
									</View>
								</View>
							</View>
							{/* end general specifivations section */}
							{/*	 geometry section */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									air conditioning
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>floor level: </Text>
										<Text>{inputs.number_of_floor}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>rotation angle: </Text>
										<Text>{inputs.rotation_angle}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>width: </Text>
										<Text>{inputs.x_dim}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>length: </Text>
										<Text>{inputs.y_dim}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>wwr_north: </Text>
										<Text>{inputs.wwr_north}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>wwr_south: </Text>
										<Text>{inputs.wwr_south}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>south neighbor distance: </Text>
										<Text>{inputs.south_neighbor_distance}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>south neighbor height: </Text>
										<Text>{inputs.south_neighbor_height}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>north neighbor distance: </Text>
										<Text>{inputs.north_neighbor_distance}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>north neighbor height: </Text>
										<Text>{inputs.north_neighbor_height}</Text>
									</View>
								</View>
							</View>
							{/*	 end geometry section */}
							{/*	 air conditioning section */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									geometry specifications
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>HVAC system: </Text>
										<Text>{inputs.hvac}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>natural ventilation: </Text>
										<Text>
											{inputs.natural_ventilation ? "has it" : "does not have"}
										</Text>
									</View>
								</View>
							</View>
							{/*	 end air conditioning section */}
							{/*	 Thermal specifications section */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									Thermal specifications of walls
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>wall U value: </Text>
										<Text>{inputs.wall_uvalue}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>floor U value: </Text>
										<Text>{inputs.floor_uvalue}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>roof U value: </Text>
										<Text>{inputs.roof_uvalue}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>window U value: </Text>
										<Text>{inputs.window_uvalue}</Text>
									</View>
								</View>
							</View>
							{/*	 end Thermal specifications section */}
							{/*	 boundry condition section */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									boundries condition
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>east wall boundry condition: </Text>
										<Text>{inputs.east_wall_bc}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>west wall boundry condition: </Text>
										<Text>{inputs.west_wall_bc}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>north wall boundry condition: </Text>
										<Text>{inputs.north_wall_bc}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>south wall boundry condition: </Text>
										<Text>{inputs.south_wall_bc}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>roof boundry condition: </Text>
										<Text>{inputs.roof_bc}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>floor boundry condition: </Text>
										<Text>{inputs.floor_bc}</Text>
									</View>
								</View>
							</View>
							{/*	 end boundry condition section */}
						</View>
					</View>
					{/* {ouputs.map((output, idx) => {
						return <Text key={idx}>{JSON.stringify(output)}</Text>;
					})} */}
				</View>
				{/* end main */}
			</Page>
		</Document>
	);
};

export default PdfDoc;
