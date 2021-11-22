import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = () => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh}>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial attach="material" color="blue" />
		</mesh>
	);
};

const _3D = () => {
	return (
		<Canvas
			colorManagement
			camera={{
				position: [2, 2, 2],
				zoom: 100,
				near: 1,
				far: 1000,
				top: 100,
				bottom: -100,
				right: 100,
				left: -100,
			}}
			orthographic
		>
			<ambientLight intensity={0.3} />
			<directionalLight position={[0, 10, 5]} intensity={1.5} />
			<Box />
		</Canvas>
	);
};

export default _3D;
