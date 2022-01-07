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

const Material3D = () => {
	return <div>3d</div>;
};

export default Material3D;
