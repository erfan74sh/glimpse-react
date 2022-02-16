import React from "react";
import {
	Page,
	Text,
	View,
	Image,
	Document,
	StyleSheet,
	Font,
} from "@react-pdf/renderer";

import Logo from "../../../../assets/images/logo-02.png";

// Create styles
const styles = StyleSheet.create({
	page: {
		fontSize: 12,
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

	section_inputs_items_title: {
		borderBottom: "1 solid #323232",
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
	const ouputs = data.data;
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
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									General specifications
								</Text>
								<View style={styles.section_inputs_items_content}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>project name:</Text>
										<Text>{data.project_name}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>zone name:</Text>
										<Text>{data.zone_name}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>alternative name:</Text>
										<Text>{data.alternative_name}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>location:</Text>
										<Text>{data.location}</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>building type:</Text>
										<Text>{data.building_program}</Text>
									</View>
								</View>
							</View>
							{/*  */}
							{/* <View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									مشخصات هندسی فضا
								</Text>
								<View style={styles.section_inputs_items_content} debug={true}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>طول:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>عرض:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>شماره طبقه:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>wwr شمالی:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>wwr جنوبی:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>ارتفاع همسایه جنوبی:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>فاصله همسایه جنوبی:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>ارتفاع همسایه شمالی:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>فاصله همسایه شمالی:</Text>
									</View>
								</View>
							</View> */}
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
