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

import font300 from "../../../../assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Light.ttf";
import font400 from "../../../../assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Regular.ttf";
import font600 from "../../../../assets/fonts/Noto_Sans_Arabic/NotoSansArabic-SemiBold.ttf";
import font700 from "../../../../assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Bold.ttf";

Font.register({
	family: "Noto Sans Arabic",
	fonts: [
		{
			src: font400,
			fontWeight: 300,
		},
		{
			src: font400,
		},
		{
			src: font600,
			fontWeight: 600,
		},
		{
			src: font700,
			fontWeight: 700,
		},
	],
});

// Create styles
const styles = StyleSheet.create({
	page: {
		fontFamily: "Noto Sans Arabic",
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
		justifyContent: "flex-end",
	},

	section_inputs_items_content_item: {
		width: "25%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
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
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* header */}
				<View style={styles.header}>
					<Image src={Logo} style={styles.logoImage} />
					<Text>نتایج خروجی شبیه‌سازی بخش انرژی</Text>
				</View>
				{/* end header */}
				{/* main */}
				<View style={styles.main}>
					<View style={styles.section}>
						<Text style={styles.section_header}>پارامترهای ورودی</Text>
						<View style={styles.section_inputs}>
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									تایتل سکشن
								</Text>
								<View style={styles.section_inputs_items_content} debug={true}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
								</View>
							</View>
							{/*  */}
							<View style={styles.section_inputs_items}>
								<Text style={styles.section_inputs_items_title}>
									تایتل سکشن
								</Text>
								<View style={styles.section_inputs_items_content} debug={true}>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
									<View style={styles.section_inputs_items_content_item}>
										<Text>مقدار</Text>
										<Text>جهت‌گیری فضا:</Text>
									</View>
								</View>
							</View>
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
