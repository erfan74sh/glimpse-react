import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// state
import { selectInput } from "../../../../../../features/data/inputDataSlice";

const Building = () => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh}>
			<boxBufferGeometry attach="geometry" args={[4 / 10, 3.5 / 10, 6 / 10]} />
			<meshStandardMaterial attach="material" color="#4d6ab9" />
		</mesh>
	);
};

const SitePlan3D = () => {
	return (
		<Canvas
			colorManagement
			camera={{
				position: [0, 0, 2],
				zoom: 210,
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
			<Building />
			<OrbitControls />
		</Canvas>
	);
};

export default SitePlan3D;
