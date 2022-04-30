export const unitOptions = {
	// inputs:

	// common:
	x_dim: "m",
	y_dim: "m",
	rotation_angle: "deg",
	wwr_north: "%",
	wwr_south: "%",
	shading_type: "",
	south_neighbor_distance: "m",
	south_neighbor_height: "m",
	north_neighbor_distance: "m",
	north_neighbor_height: "m",
	// energy:
	hvac: "",
	wall_uvalue: "w/m.k",
	roof_uvalue: "w/m.k",
	floor_uvalue: "w/m.k",
	window_uvalue: "w/m.k",
	natural_ventilation: "",
	number_of_floor: "",
	south_wall_bc: "",
	north_wall_bc: "",
	east_wall_bc: "",
	west_wall_bc: "",
	floor_bc: "",
	roof_bc: "",
	// visualComfort:
	reflectance_wall: "",
	reflectance_celing: "",
	reflectance_floor: "",
	vt_glass: "",

	// outputs:

	// common:
	area: "m\u00B2",
	// energy:
	primary_energy: "kWh/m\u00B2",
	total_energy: "kWh/m\u00B2",
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
	// visualComfort
	udi: "%",
	mda: "%",
	svd: "%",
	ase: "%",
	sda: "%",
};

export const colorPallet = [
	"#784AC1",
	"#00C48C",
	"#B5008E",
	"#0085D3",
	"#003576",
	"#8b5cf6",
	"#a21caf",
	"#f43f5e",
];

export const labelOptions = {
	// common labels
	area: "Area",
	// energyConsumption labels
	primary_energy: "Primary Energy",
	total_energy: "Total Energy",
	coolingload: "Cooling load",
	heatingload: "Heating load",
	electriclight: "Electric Lighting",
	fanger20: "Fanger 80%",
	fanger10: "Fanger 90%",
	adaptiveashrae80: "Adaptive ASHRAE 80%",
	adaptiveashrae90: "Adaptive ASHRAE 90%",
	adaptiveencalss2por: "Adaptive EN-Class",
	overheatot_occupied_hours: "Overheat OT- Occupied hours",
	underheatot_occupied_hours: "Underheat OT- Occupied hours",
	verheatdbt_occupied_hours: "Overheat DbT- Occupied hours",
	underheatdbt_occupied_hours: "Under heat DbT- Occupied hours",
	// visualComfort labels
	udi: "UDI",
	mda: "mDA",
	svd: "sVD",
	ase: "ASE",
	sda: "sDA",
};
