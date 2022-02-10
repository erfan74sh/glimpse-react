import React, { useRef, Suspense } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";
// state
import { selectInput } from "../../../../features/data/inputDataSlice";

const NorthSign = ({ xDim, yDim, rotation }) => {
	const materials = useLoader(MTLLoader, "NorthSign.mtl");
	const obj = useLoader(OBJLoader, "NorthSign.obj", (loader) => {
		materials.preload();
		loader.setMaterials(materials);
	});
	return (
		<primitive
			object={obj}
			scale={0.07}
			position={[-(xDim / 2 + 3) / 10, -3.5 / 10 / 2, (yDim / 2 + 3) / 10]}
			rotation={[0, (rotation / 180) * Math.PI, 0]}
		/>
	);
};

const Box = ({ xDim, yDim, position, rotation, data }) => {
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
			<meshStandardMaterial
				attachArray="material"
				color={data.eastWallCondition === "adiabatic" ? "#C79ACD" : "#4d6ab9"}
			/>
			<meshStandardMaterial
				attachArray="material"
				color={data.westWallCondition === "adiabatic" ? "#C79ACD" : "#4d6ab9"}
			/>
			<meshStandardMaterial
				attachArray="material"
				color={data.roofCondition === "adiabatic" ? "#C79ACD" : "#4d6ab9"}
			/>
			<meshStandardMaterial
				attachArray="material"
				color={
					data.floorCondition === "adiabatic"
						? "#C79ACD"
						: data.floorCondition === "outdoor"
						? "#4d6ab9"
						: "#D6C27C"
				}
			/>
			<meshStandardMaterial
				attachArray="material"
				color={data.southWallCondition === "adiabatic" ? "#C79ACD" : "#4d6ab9"}
			/>
			<meshStandardMaterial
				attachArray="material"
				color={data.northWallCondition === "adiabatic" ? "#C79ACD" : "#4d6ab9"}
			/>
		</mesh>
	);
};

const WindowSouth = ({ xDim, yDim, dimentions }) => {
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

const WindowNorth = ({ xDim, yDim, dimentions }) => {
	const mesh = useRef(null);
	return (
		<mesh
			ref={mesh}
			position={[0, 0, -yDim / 10 / 2 - 0.001]}
			rotation={[0, Math.PI, 0]}
		>
			<planeBufferGeometry
				attach="geometry"
				args={[dimentions.width, dimentions.height]}
			/>
			<meshStandardMaterial attach="material" color="white" />
		</mesh>
	);
};

const Roof = ({ xDim, yDim, roofCondition }) => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh} position={[0, 3.5 / 10 / 2 + 0.2 / 10 / 2, 0]}>
			<boxBufferGeometry
				attach="geometry"
				args={[xDim / 10, 0.2 / 10, yDim / 10]}
			/>
			<meshStandardMaterial
				attach="material"
				color={roofCondition === "adiabatic" ? "#C79ACD" : "#4d6ab9"}
			/>
		</mesh>
	);
};
const Floor = ({ xDim, yDim, floorCondition }) => {
	const mesh = useRef(null);
	return (
		<mesh ref={mesh} position={[0, -3.5 / 10 / 2 - 0.2 / 10 / 2, 0]}>
			<boxBufferGeometry
				attach="geometry"
				args={[xDim / 10, 0.2 / 10, yDim / 10]}
			/>
			<meshStandardMaterial
				attach="material"
				color={
					floorCondition === "adiabatic"
						? "#C79ACD"
						: floorCondition === "outdoor"
						? "#4d6ab9"
						: "#D6C27C"
				}
			/>
		</mesh>
	);
};

const ShaderType1 = ({ xDim, yDim, height, dimentions }) => {
	const mesh = useRef(null);
	return (
		<mesh
			ref={mesh}
			rotation={[-Math.PI / 2, 0, 0]}
			position={[0, height, yDim / 10 / 2 + 0.03 / 2]}
		>
			<planeBufferGeometry attach="geometry" args={[dimentions.width, 0.03]} />
			<meshStandardMaterial attach="material" color="gray" />
		</mesh>
	);
};

const ShaderType2 = ({ yDim, dimentions }) => {
	const mesh = useRef(null);
	return (
		<mesh
			ref={mesh}
			position={[0, dimentions.height / 2, yDim / 10 / 2 + 0.1 / 2]}
			rotation={[-Math.PI / 2, 0, 0]}
		>
			<planeBufferGeometry attach="geometry" args={[dimentions.width, 0.1]} />
			<meshStandardMaterial attach="material" color="gray" />
		</mesh>
	);
};

const ShaderType3 = ({ yDim, dimentions }) => {
	const mesh = useRef(null);
	return (
		<>
			<mesh
				ref={mesh}
				position={[dimentions.width / 2, 0, yDim / 10 / 2 + 0.1 / 2]}
			>
				<boxBufferGeometry
					attach="geometry"
					args={[0.01, dimentions.height, 0.1]}
				/>
				<meshStandardMaterial attach="material" color="gray" />
			</mesh>
			<mesh
				ref={mesh}
				position={[-dimentions.width / 2, 0, yDim / 10 / 2 + 0.1 / 2]}
			>
				<boxBufferGeometry
					attach="geometry"
					args={[0.01, dimentions.height, 0.1]}
				/>
				<meshStandardMaterial attach="material" color="gray" />
			</mesh>
		</>
	);
};

const _3D = ({ xDim, yDim, wwrNorth, wwrSouth, shadingType, rotation }) => {
	const data = useSelector(selectInput);
	const southWindowDimentions = {
		width: (xDim / 10) * (wwrSouth / 100),
		height: (3.5 / 10) * (3 / 5),
	};
	const northWindowDimentions = {
		width: (xDim / 10) * (wwrNorth / 100),
		height: (3.5 / 10) * (3 / 5),
	};
	return (
		<Canvas
			colorManagement
			camera={{
				position: [2, 2, 2],
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
			<Suspense fallback={null}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[1, 10, 5]} intensity={1.5} />
				<directionalLight position={[-1, 10, -5]} intensity={0.7} />
				<Box xDim={xDim} yDim={yDim} data={data} />
				<Roof xDim={xDim} yDim={yDim} roofCondition={data.roofCondition} />
				<Floor xDim={xDim} yDim={yDim} floorCondition={data.floorCondition} />
				<NorthSign xDim={xDim} yDim={yDim} rotation={rotation} />

				{/* <TransformControls mode="scale">
			</TransformControls> */}
				{wwrSouth !== 0 && (
					<group>
						<WindowSouth
							xDim={xDim}
							yDim={yDim}
							dimentions={southWindowDimentions}
						/>
						{shadingType === "2" && (
							<group>
								<ShaderType1
									xDim={xDim}
									yDim={yDim}
									height={0}
									dimentions={southWindowDimentions}
								/>
								<ShaderType1
									xDim={xDim}
									yDim={yDim}
									height={0.06}
									dimentions={southWindowDimentions}
								/>
								<ShaderType1
									xDim={xDim}
									yDim={yDim}
									height={-0.06}
									dimentions={southWindowDimentions}
								/>
							</group>
						)}
						{shadingType === "1" && (
							<ShaderType2 yDim={yDim} dimentions={southWindowDimentions} />
						)}
						{shadingType === "3" && (
							<ShaderType3 yDim={yDim} dimentions={southWindowDimentions} />
						)}
						{shadingType === "4" && (
							<group>
								<ShaderType1
									xDim={xDim}
									yDim={yDim}
									height={0}
									dimentions={southWindowDimentions}
								/>
								<ShaderType1
									xDim={xDim}
									yDim={yDim}
									height={0.06}
									dimentions={southWindowDimentions}
								/>
								<ShaderType1
									xDim={xDim}
									yDim={yDim}
									height={-0.06}
									dimentions={southWindowDimentions}
								/>
								<ShaderType3 yDim={yDim} dimentions={southWindowDimentions} />
								<ShaderType2 yDim={yDim} dimentions={southWindowDimentions} />
							</group>
						)}
					</group>
				)}
				<WindowNorth
					xDim={xDim}
					yDim={yDim}
					dimentions={northWindowDimentions}
				/>
				<OrbitControls />
			</Suspense>
		</Canvas>
	);
};

export default _3D;
