import React, { useEffect, useState } from "react";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	LabelList,
	Tooltip,
	Legend,
} from "recharts";

const renderCustomeLabel = (props) => {
	const { x, y, stroke, value, opacity } = props;
	return (
		<text
			x={x - 22}
			y={y}
			dy={8}
			fill={stroke}
			fontSize={10}
			textAnchor="middle"
			opacity={opacity}
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

const CustomTooltip = ({ active, payload, label, stroke }) => {
	let title;
	let color = ["#784AC1", "#00C48C"];
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
			<div className="p-3 bg-gray-200 bg-opacity-50 border border-blue-550 border-opacity-40">
				<h4 className="text-blue-550 font-semibold text-sm">{label}</h4>
				{payload.map((p, i) => {
					return (
						<p
							key={p.name}
							style={{ color: color[i] }}
							className="text-xs font-medium"
						>{`${p.name} : ${
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

const CustomLegend = ({ payload, changeOpacity, resetOpacity }) => {
	return (
		<ul className="flex flex-col gap-y-2 content-center">
			{payload.map((entry) => {
				return (
					<li
						className="px-1 py-0.5 rounded-lg text-white text-xs font-normal capitalize cursor-pointer"
						style={{ backgroundColor: entry.color }}
						onMouseEnter={changeOpacity}
						onMouseLeave={resetOpacity}
						key={entry.value}
					>
						{entry.value}
					</li>
				);
			})}
		</ul>
	);
};

const Chart = ({ series }) => {
	const [lineOpacity, setLineOpacity] = useState({ output_1: 1, output_2: 1 });
	// todo: define lineOpacity in useEffect and fix the issue

	const handleMouseEnterLegend = (e) => {
		let tempState = { ...lineOpacity };
		for (let name in tempState) {
			console.log(name);
			if (name !== e.target.innerHTML) {
				tempState[name] = 0.3;
			}
		}
		setLineOpacity(tempState);
	};

	const handleMouseLeaveLegend = () => {
		let tempState = { ...lineOpacity };
		for (let name in tempState) {
			tempState[name] = 1;
		}
		setLineOpacity(tempState);
	};

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
			{series
				.filter((s) => s.visible)
				.map((s) => {
					return (
						<Line
							type="linear"
							dataKey="amt"
							data={s.data}
							name={s.name}
							key={s.name}
							stroke={s.stroke}
							strokeWidth="2"
							strokeOpacity={lineOpacity[s.name]}
							dot={{
								strokeWidth: 1,
								fill: s.stroke,
								r: 5,
								opacity: lineOpacity[s.name],
							}}
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
			<Legend
				align="left"
				verticalAlign="middle"
				layout="vertical"
				wrapperStyle={{ left: 0 }}
				content={<CustomLegend />}
				changeOpacity={handleMouseEnterLegend}
				resetOpacity={handleMouseLeaveLegend}
			/>
		</LineChart>
	);
};

export default Chart;
