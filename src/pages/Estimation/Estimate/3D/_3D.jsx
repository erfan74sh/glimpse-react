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
	console.log(xDim, yDim);
	// const [expand, setExpand] = useState(false);

	// const { scale } = useSpring({ scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1] });

	return (
		// <animated.mesh ref={mesh} scale={scale} onClick={() => setExpand(!expand)}>
		// 	<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
		// 	<meshStandardMaterial attach="material" color="blue" />
		// </animated.mesh>
		<mesh ref={mesh}>
			<boxBufferGeometry
				attach="geometry"
				args={[xDim / 10, 3.5 / 10, yDim / 10]}
			/>
			<meshStandardMaterial attach="material" color="#4d6ab9" />
		</mesh>
	);
};

const Window1 = ({ xDim, yDim }) => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh} position={[0, 0, yDim / 10 / 2 + 0.001]}>
			<planeBufferGeometry
				attach="geometry"
				args={[(xDim / 10 / 4) * 3, (3.5 / 10 / 5) * 3]}
			/>
			<meshStandardMaterial attach="material" color="white" />
		</mesh>
	);
};

const Window2 = ({ xDim, yDim }) => {
	const mesh = useRef(null);
	return (
		<mesh
			ref={mesh}
			position={[xDim / 10 / 2 + 0.001, 0, 0]}
			rotation={[0, Math.PI / 2, 0]}
		>
			<planeBufferGeometry
				attach="geometry"
				args={[(yDim / 10 / 4) * 3, (3.5 / 10 / 5) * 1.5]}
			/>
			<meshStandardMaterial attach="material" color="white" />
		</mesh>
	);
};

const _3D = ({ xDim, yDim }) => {
	return (
		<Canvas
			colorManagement
			camera={{
				position: [2, 2, 2],
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
			<ambientLight intensity={0.3} />
			<directionalLight position={[0, 10, 5]} intensity={1.5} />
			<Box xDim={xDim} yDim={yDim} />

			{/* <TransformControls mode="scale">
			</TransformControls> */}
			{/* <OrbitControls /> */}
			<Window1 xDim={xDim} yDim={yDim} />
			<Window2 xDim={xDim} yDim={yDim} />
		</Canvas>
	);
};

export default _3D;
