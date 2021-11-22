import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

const Box = () => {
	const mesh = useRef(null);

	// const [expand, setExpand] = useState(false);

	// const { scale } = useSpring({ scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1] });

	return (
		// <animated.mesh ref={mesh} scale={scale} onClick={() => setExpand(!expand)}>
		// 	<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
		// 	<meshStandardMaterial attach="material" color="blue" />
		// </animated.mesh>
		<mesh ref={mesh}>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial attach="material" color="blue" />
		</mesh>
	);
};

const _3D = ({ dimentions }) => {
	console.log(dimentions);
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
			<TransformControls mode="scale">
				<Box dimentions={dimentions} />
			</TransformControls>
			{/* <OrbitControls /> */}
		</Canvas>
	);
};

export default _3D;
