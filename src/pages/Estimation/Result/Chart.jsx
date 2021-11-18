import React from "react";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	LabelList,
	Tooltip,
} from "recharts";

const renderCustomeLabel = (props) => {
	const { x, y, stroke, value } = props;
	return (
		<text
			x={x - 20}
			y={y}
			dy={-4}
			fill={stroke}
			fontSize={10}
			textAnchor="middle"
		>
			{value}
		</text>
	);
};

const CustomizedAxisTick = ({ x, y, payload }) => {
	let stroke = "#3F3356";
	let strokeWidth = 1;
	if (
		payload.value === "UDI" ||
		payload.value === "ASE" ||
		payload.value === "SDA"
	) {
		stroke = "#4093E1";
		strokeWidth = 10;
	}
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={-10}
				textAnchor="middle"
				fill={stroke}
				strokeWidth={strokeWidth}
			>
				{payload.value}
			</text>
		</g>
	);
};

const CustomTooltip = ({ active, payload, label }) => {
	let title;
	switch (label) {
		case "X- Dimention":
			title = "m";
			break;
		case "Y- Dimention":
			title = "m";
			break;
		case "Material":
			title = `type`;
			break;
		case "Shading":
			title = `type`;
			break;
		default:
			title = `%`;
			break;
	}
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p>{label}</p>
				{payload.map((p) => {
					return (
						<p className="label" key={p.name}>{`${p.name} : ${
							label === "Shading"
								? p.value / 10
								: label === "Material"
								? p.value / 10
								: p.value
						} ${title}`}</p>
					);
				})}
			</div>
		);
	}

	return null;
};

const Chart = () => {
	const series = [
		{
			name: "output 1",
			stroke: "#926ECB",
			data: [
				{ name: "X- Dimention", uv: 400, amt: 8 },
				{ name: "Y- Dimention", uv: 450, amt: 20 },
				{ name: "Material", uv: 380, amt: 30 },
				{ name: "Shading", uv: 410, amt: 20 },
				{ name: "UDI", uv: 410, amt: 65 },
				{ name: "SDA", uv: 410, amt: 80 },
				{ name: "ASE", uv: 410, amt: 35 },
			],
		},
		{
			name: "output 2",
			stroke: "#00C48C",
			data: [
				{ name: "X- Dimention", uv: 400, amt: 10 },
				{ name: "Y- Dimention", uv: 450, amt: 30 },
				{ name: "Material", uv: 380, amt: 70 },
				{ name: "Shading", uv: 410, amt: 40 },
				{ name: "UDI", uv: 410, amt: 50 },
				{ name: "SDA", uv: 410, amt: 55 },
				{ name: "ASE", uv: 410, amt: 10 },
			],
		},
	];

	const getValue = (data) => {
		let val;
		switch (data.name) {
			case "X- Dimention":
				val = `${data.amt}m`;
				break;
			case "Y- Dimention":
				val = `${data.amt}m`;
				break;
			case "Material":
				val = `type ${data.amt / 10}`;
				break;
			case "Shading":
				val = `type ${data.amt / 10}`;
				break;
			default:
				val = `${data.amt}%`;
				break;
		}
		return val;
	};

	return (
		<LineChart
			width={1000}
			height={300}
			margin={{ top: 20, right: 50, bottom: 20, left: 50 }}
		>
			<CartesianGrid stroke="#000" strokeWidth="3" horizontal={false} />
			{series.map((s) => {
				return (
					<Line
						type="linear"
						dataKey="amt"
						data={s.data}
						name={s.name}
						key={s.name}
						stroke={s.stroke}
						strokeWidth="2"
						dot={{ strokeWidth: 1, fill: s.stroke, r: 5 }}
					>
						<LabelList dataKey={getValue} content={renderCustomeLabel} />
					</Line>
				);
			})}
			<XAxis
				dataKey="name"
				type="category"
				allowDuplicatedCategory={false}
				orientation="top"
				axisLine={false}
				tick={<CustomizedAxisTick />}
				tickSize="0"
			/>
			<YAxis hide={true} />
			<Tooltip content={<CustomTooltip />} />
		</LineChart>
	);
};

export default Chart;
