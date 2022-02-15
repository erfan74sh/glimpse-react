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
	ResponsiveContainer,
} from "recharts";

const CustomizedLabel = (props) => {
	const { x, y, value, strokeOpacity } = props;
	return (
		<text
			x={x - 22}
			y={y}
			dy={8}
			fontSize={10}
			textAnchor="middle"
			fillOpacity={strokeOpacity}
		>
			{value}
		</text>
	);
};

const CustomizedDot = ({ cx, cy, stroke, strokeOpacity }) => {
	return (
		<g opacity={strokeOpacity}>
			<line x1={cx - 10} y1={cy} x2={cx + 10} y2={cy} stroke="black" />
			<circle cx={cx} cy={cy} r="5" fill={stroke} />
		</g>
	);
};

const CustomizedAxisTick = ({ x, y, payload }) => {
	let stroke = "#3F3356";
	let fontWeight = 400;
	if (
		payload.value === "cooling load" ||
		payload.value === "heating load" ||
		payload.value === "electric light" ||
		payload.value === "udi" ||
		payload.value === "mda" ||
		payload.value === "svd" ||
		payload.value === "ase" ||
		payload.value === "sda" ||
		payload.value === "coolingload" ||
		payload.value === "heatingload" ||
		payload.value === "electriclight" ||
		payload.value === "fanger20" ||
		payload.value === "fanger10" ||
		payload.value === "adaptiveashrae80" ||
		payload.value === "adaptiveashrae90" ||
		payload.value === "adaptiveencalss2por" ||
		payload.value === "overheatot_occupied_hours" ||
		payload.value === "underheatot_occupied_hours" ||
		payload.value === "verheatdbt_occupied_hours" ||
		payload.value === "underheatdbt_occupied_hours"
	) {
		stroke = "#4093E1";
		fontWeight = 700;
	}
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={-10}
				textAnchor="start"
				fill={stroke}
				transform="rotate(-45)"
				className="text-sm"
				fontWeight={fontWeight}
			>
				{payload.value}
			</text>
		</g>
	);
};

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="border-blue-550 border border-opacity-40 bg-gray-200 bg-opacity-80 p-3">
				<h4 className="text-blue-550 text-sm font-semibold">{label}</h4>
				{payload.map((p, i) => {
					return (
						<p
							key={i}
							style={{ color: p.stroke }}
							className="text-xs font-medium"
						>{`${p.name} : ${
							label === "Shading"
								? p.value / 10
								: label === "Material"
								? p.value / 10
								: p.value
						} ${p.payload.unit}`}</p>
					);
				})}
			</div>
		);
	}

	return null;
};

const CustomLegend = ({ payload, changeOpacity, resetOpacity }) => {
	return (
		<ul className="flex flex-col content-center gap-y-2">
			{payload.map((entry, idx) => {
				return (
					<li
						className="cursor-pointer rounded-lg px-1 py-0.5 text-xs font-normal capitalize text-white"
						style={{ backgroundColor: entry.color }}
						onMouseEnter={changeOpacity}
						onMouseLeave={resetOpacity}
						key={idx}
					>
						{entry.value}
					</li>
				);
			})}
		</ul>
	);
};

const Chart = ({ series }) => {
	const [lineOpacity, setLineOpacity] = useState({});
	useEffect(() => {
		let lineOpacity = {};
		series.forEach((serie) => {
			lineOpacity[serie.name] = 1;
		});
		setLineOpacity(lineOpacity);
	}, [series]);

	const handleMouseEnterLegend = (e) => {
		let tempState = { ...lineOpacity };
		for (let name in tempState) {
			if (name !== e.target.innerHTML) {
				tempState[name] = 0.2;
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

	// ! to add unit to labels in line pass this function to "dataKey" attribute
	// ! of <LabelList /> component
	// const getValue = (data) => {
	// 	let value = data.amt + data.unit;
	// 	return value;
	// };

	return (
		<ResponsiveContainer width="100%" height={400}>
			<LineChart
				width={1200}
				height={300}
				margin={{ top: 120, right: 50, bottom: 20, left: 50 }}
			>
				<CartesianGrid stroke="#000" strokeWidth="2" horizontal={false} />
				{series
					.filter((s) => s.visible)
					.map((s, idx) => {
						return (
							<Line
								type="linear"
								dataKey="amt"
								data={s.data}
								name={s.name}
								key={idx}
								stroke={s.stroke}
								strokeWidth="2"
								strokeOpacity={lineOpacity[s.name]}
								dot={<CustomizedDot />}
								isAnimationActive={false}
							>
								<LabelList
									dataKey="amt"
									content={
										<CustomizedLabel strokeOpacity={lineOpacity[s.name]} />
									}
								/>
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
					interval={0}
				/>
				<YAxis hide={true} scale="log" domain={["auto", "auto"]} />
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
		</ResponsiveContainer>
	);
};

export default Chart;
