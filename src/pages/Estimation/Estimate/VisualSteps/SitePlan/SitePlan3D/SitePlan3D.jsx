import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// state
import { selectInput } from "../../../../features/data/inputDataSlice";

const Material3D = () => {
	const mesh = useRef(null);
	return <div>3d</div>;
};

export default Material3D;
