//EnergyConsumption
//
// Geometry
export const shadingOptions = [
	{ label: "horizontal", value: "1" },
	{ label: "horizontal louvre", value: "2" },
	{ label: "vertical", value: "3" },
	{ label: "all modes", value: "4" },
];
export const floorLevelOptions = [
	{ label: "ground floor", value: "0" },
	{ label: "1st floor", value: "1" },
	{ label: "2nd floor", value: "2" },
	{ label: "3rd floor", value: "3" },
	{ label: "4th floor", value: "4" },
	{ label: "5th floor", value: "5" },
];

//
// BoundryCondition
export const WallOptions = [
	{ label: "adiabatic", value: "0" },
	{ label: "external", value: "1" },
];
export const floorOptions = [
	{ label: "adiabatic", value: "0" },
	{ label: "external", value: "1" },
	{ label: "ground", value: "2" },
];

//
// Material
export const wallMaterialOptions = [
	{
		label: "1.719",
		value: "1.719",
		moreDescription: "(Brick wall + Brick facade)",
		moreInfo: "دیوار آجری با نمای آجری",
	},
	{
		label: "1.649",
		value: "1.649",
		moreDescription: "(Cement Block + Stone facade)",
		moreInfo: "دیوار بلوک سیمانی با نمای سنگ",
	},
	{
		label: "0.979",
		value: "0.979",
		moreDescription: "(Cement Block + Cement facade)",
		moreInfo: "دیوار بلوک سیمانی با نمای سیمانی",
	},
	{
		label: "0.225",
		value: "0.225",
		moreDescription:
			"(Two layer Brick wall with Insulation in the middle + Brick facade)",
		moreInfo: "دیوار دولایه آجری با عایق میانی و نمای آجری",
	},
];
export const floorMaterialOptions = [
	{
		label: "0.37",
		value: "0.37",
		moreDescription: "(Reinforced Concrete with air gap + Terrazzo)",
		moreInfo: "کف بتنی با پوشش موزاییک و فاصله هوایی",
	},
	{
		label: "0.47",
		value: "0.47",
		moreDescription: "(Beam Block + Parquet flooring)",
		moreInfo: "کف تیرچه بلوک با پوشش پارکت",
	},
	{
		label: "0.65",
		value: "0.65",
		moreDescription: "(Reinforced concrete + Parquet flooring)",
		moreInfo: "کف بتنی با پوشش پارکت",
	},
];
export const roofMaterialOptions = [
	{
		label: "0.878",
		value: "0.878",
		moreDescription: "(Gypsum Board + Reinforced Concrete + Terrazzo)",
		moreInfo: "بام بتنی با کفپوش موزاییکی",
	},
	{
		label: "0.211",
		value: "0.211",
		moreDescription:
			"(Reinforced Concrete with thermal insullation + Terrazzo)",
		moreInfo: "بام بتنی با کف پوش موزاییکی و عایق حرارتی",
	},
	{
		label: "0.393",
		value: "0.393",
		moreDescription: "(Beam block + terrazzo)",
		moreInfo: "بام تیرچه بلوک با کفپوش موزاییکی",
	},
	{
		label: "0.386",
		value: "0.386",
		moreDescription: "(Beam Block with out terrazzo)",
		moreInfo: "بام تیرچه بلوک بدون کفپوش موزاییکی",
	},
	{
		label: "1.092",
		value: "1.092",
		moreDescription: "(Gypsum Plaster + Reinforced Concrete + Terrazzo)",
		moreInfo: "بام بتنی با کفپوش موزاییکی و نازک کاری گچ اندود داخلی",
	},
];
export const glassMaterialOptions = [
	{
		label: "1.7",
		value: "1.7",
		moreInfo: "?",
		moreDescription: "(Triple glazed windows)",
	},
	{
		label: "2.6",
		value: "2.6",
		moreInfo: "?",
		moreDescription: "(Double low-E glazed windows)",
	},
	{
		label: "3.1",
		value: "3.1",
		moreInfo: "?",
		moreDescription: "(Double glazed windows)",
	},
	{
		label: "5.7",
		value: "5.7",
		moreInfo: "?",
		moreDescription: "(Single glazed windows)",
	},
];

//
// Hvac
export const hvacOptions = [
	{ label: "ideal air loads", value: "0" },
	{ label: "PTAC | residential", value: "1" },
	{ label: "PTHP | residential", value: "2" },
	{ label: "VAV w/reheat", value: "7" },
	{ label: "VAV w/PFP boxes", value: "8" },
	{ label: "fan coil units + DOAS", value: "11" },
];
export const naturalVentilationOptions = [
	{ label: "on", value: "true" },
	{ label: "off", value: "false" },
];
