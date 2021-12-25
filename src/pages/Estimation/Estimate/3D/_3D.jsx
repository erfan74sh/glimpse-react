import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const Box = ({ xDim, yDim, position, rotation }) => {
	// const data = useSelector(selectInput);
	const mesh = useRef(null);
	// console.log(xDim, yDim);
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

const Window1 = ({ xDim, yDim, dimentions }) => {
	const mesh = useRef(null);

	return (
		<mesh ref={mesh} position={[0, 0, yDim / 10 / 2 + 0.001]}>
			<planeBufferGeometry
				attach="geometry"
				args={[dimentions.width, dimentions.height]}
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

const Roof = ({ xDim, yDim }) => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh} position={[0, 3.5 / 10 / 2 + 0.1 / 10 / 2, 0]}>
			<boxBufferGeometry
				attach="geometry"
				args={[xDim / 10, 0.1 / 10, yDim / 10]}
			/>
			<meshStandardMaterial attach="material" color="gray" />
		</mesh>
	);
};

const ShaderType1 = ({ xDim, yDim, height }) => {
	const mesh = useRef(null);
	return (
		<mesh
			ref={mesh}
			rotation={[-Math.PI / 2, 0, 0]}
			position={[0, height, yDim / 10 / 2 + 0.05 / 2]}
		>
			<planeBufferGeometry
				attach="geometry"
				args={[(xDim / 10 / 4) * 3, 0.05]}
			/>
			<meshStandardMaterial attach="material" color="gray" />
		</mesh>
	);
};

const _3D = ({ xDim, yDim, wwrNorth, wwrSouth, shadingType }) => {
	const southWindowDimentions = {
		width: (xDim / 10) * (wwrSouth / 100),
		height: (3.5 / 10) * (3 / 5),
	};
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
			<ambientLight intensity={0.5} />
			<directionalLight position={[1, 10, 5]} intensity={1.5} />
			<Box xDim={xDim} yDim={yDim} />
			<Roof xDim={xDim} yDim={yDim} />

			{/* <TransformControls mode="scale">
			</TransformControls> */}
			{wwrSouth !== 0 && (
				<group>
					<Window1 xDim={xDim} yDim={yDim} dimentions={southWindowDimentions} />
					{shadingType === "louver" && (
						<group>
							<ShaderType1 xDim={xDim} yDim={yDim} height={0} />
							<ShaderType1 xDim={xDim} yDim={yDim} height={0.06} />
							<ShaderType1 xDim={xDim} yDim={yDim} height={-0.06} />
						</group>
					)}
				</group>
			)}
			<Window2 xDim={xDim} yDim={yDim} />
			<OrbitControls />
		</Canvas>
	);
};

export default _3D;
