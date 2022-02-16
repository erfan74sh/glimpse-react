import React from "react";
import {
	Page,
	Text,
	View,
	Image,
	Document,
	StyleSheet,
} from "@react-pdf/renderer";

import Logo from "../../../../assets/images/logo-02.png";

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "white",
		padding: 20,
		paddingTop: 40,
		borderTop: "5px solid #147CDD",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
		color: "#147CDD",
		backgroundColor: "#323232",
		// fontSize: 24,
		fontWeight: 700,
	},
	logoImage: {
		height: "auto",
		width: "20mm",
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 25,
		paddingHorizontal: 10,
	},
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
			<Page size="A4">
				<View style={styles.header}>
					<Image src={Logo} style={styles.logoImage} />
					<Text>نتایج خروجی شبیه‌سازی بخش انرژی</Text>
				</View>
				<View>
					{ouputs.map((output, idx) => {
						return <Text key={idx}>{JSON.stringify(output)}</Text>;
					})}
				</View>
				{/* <View>
					<Text style={styles.header}>output_1</Text>
				</View>
				<View style={styles.container}>
					<View style={styles.informationsSec}>
						<View style={styles.flexGroup}>
							<Text>depth [cm]:</Text>
							<Text>10</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>Height [cm]:</Text>
							<Text>3</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>Orientation:</Text>
							<Text>135</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>WWR [%]:</Text>
							<Text>3</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>SHD :</Text>
							<Text>0</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>Cooling [KWh] :</Text>
							<Text>1636.58</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>Heating [KWh] :</Text>
							<Text>1636.58</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>Lighting [KWh] :</Text>
							<Text>1636.58</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>DA [%] :</Text>
							<Text>29.4444</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>UDI [%] :</Text>
							<Text>43.3333</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>CDA [%] :</Text>
							<Text>40</Text>
						</View>
						<View style={styles.flexGroup}>
							<Text>SDA [Area%] :</Text>
							<Text>37.56</Text>
						</View>
					</View>
					<View style={styles.imageSec}>
						<Image src={img} />
					</View>
				</View> */}
			</Page>
		</Document>
	);
};

export default PdfDoc;
