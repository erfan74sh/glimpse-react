import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// state
import { selectVisualComfortData } from "../../../../../../../features/visualComfortData/VisualComfortDataSlice";

const Building = () => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh}>
			<boxBufferGeometry attach="geometry" args={[8 / 10, 3.5 / 10, 6 / 10]} />
			<meshStandardMaterial attach="material" color="#4d6ab9" />
		</mesh>
	);
};

const NorthNeighbor = ({ northNeighbor }) => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh} position={[northNeighbor.dist, northNeighbor.origin, 0]}>
			<boxBufferGeometry
				attach="geometry"
				args={[4 / 10, northNeighbor.height, 6 / 10]}
			/>
			<meshStandardMaterial attach="material" color="#2D4263" />
		</mesh>
	);
};

const SouthNeighbor = ({ soutNeighbor }) => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh} position={[-soutNeighbor.dist, soutNeighbor.origin, 0]}>
			<boxBufferGeometry
				attach="geometry"
				args={[4 / 10, soutNeighbor.height, 6 / 10]}
			/>
			<meshStandardMaterial attach="material" color="#2D4263" />
		</mesh>
	);
};

const Ground = () => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh} position={[0, -3.5 / 10 / 2 - 1 / 2 / 10, 0]}>
			<boxBufferGeometry attach="geometry" args={[5, 1 / 10, 2]} />
			<meshStandardMaterial attach="material" color="#727272" />
		</mesh>
	);
};

const SitePlan3D = () => {
	const data = useSelector(selectVisualComfortData);

	const soutNeighbor = {
		height: data.south_neighbor_height / 10,
		dist: (data.south_neighbor_distance + 6) / 10,
		origin: (data.south_neighbor_height / 2 - 3.5 / 2) / 10,
	};
	const northNeighbor = {
		height: data.north_neighbor_height / 10,
		dist: (data.north_neighbor_distance + 6) / 10,
		origin: (data.north_neighbor_height / 2 - 3.5 / 2) / 10,
	};

	return (
		<Canvas
			colorManagement
			camera={{
				position: [0, 0, 2],
				zoom: 180,
				near: 0.01,
				far: 10000,
				top: 500,
				bottom: -500,
				right: 500,
				left: -500,
			}}
			orthographic
		>
			<ambientLight intensity={0.5} />
			<directionalLight position={[1, 10, 5]} intensity={1.5} />
			<directionalLight position={[-1, 10, -5]} intensity={0.7} />
			<group position={[0, -0.5, 0]}>
				<SouthNeighbor soutNeighbor={soutNeighbor} />
				<Building />
				<NorthNeighbor northNeighbor={northNeighbor} />
				<Ground />
			</group>
			<OrbitControls />
		</Canvas>
	);
};

export default SitePlan3D;
