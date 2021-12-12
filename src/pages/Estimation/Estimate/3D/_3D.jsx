import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
// state
import { selectInput } from "../../../../features/data/inputDataSlice";

const Box = ({ xDim, yDim, position, rotation }) => {
	// const data = useSelector(selectInput);
	const mesh = useRef(null);
	let str = Math.PI * 2;
	console.log(str);
	// const [expand, setExpand] = useState(false);

	// const { scale } = useSpring({ scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1] });

	return (
		// <animated.mesh ref={mesh} scale={scale} onClick={() => setExpand(!expand)}>
		// 	<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
		// 	<meshStandardMaterial attach="material" color="blue" />
		// </animated.mesh>
		<mesh ref={mesh} rotation={rotation} position={position} scale={[1, 1, 1]}>
			<ringBufferGeometry attach="geometry" args={[2 / 5, 3 / 5, 4]} />
			<meshStandardMaterial attach="material" color="#4d6ab9" />
		</mesh>
	);
};

const _3D = ({ xDim, yDim }) => {
	return (
		<Canvas
			colorManagement
			camera={{
				position: [2, 2, 2],
				zoom: 220,
				near: 0.01,
				far: 10000,
				top: 500,
				bottom: -500,
				right: 500,
				left: -500,
			}}
			orthographic
		>
			<ambientLight intensity={0.3} />
			<directionalLight position={[0, 10, 5]} intensity={1.5} />
			<Box
				xDim={xDim}
				yDim={yDim}
				position={[0, 0, 0]}
				rotation={[0, 0, Math.PI / 4]}
			/>
			<Box
				xDim={xDim}
				yDim={yDim}
				position={[0.5, 0, -0.5]}
				rotation={[0, Math.PI / 2, Math.PI / 4]}
			/>
			{/* <TransformControls mode="scale">
			</TransformControls> */}
			{/* <OrbitControls /> */}
		</Canvas>
	);
};

export default _3D;
