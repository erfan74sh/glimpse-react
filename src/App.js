import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Estimation from "./pages/Estimation";
import Result from "./pages/Estimation/Result";
import Estimate from "./pages/Estimation/Estimate";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs/AboutUs";
// style
import "./App.scss";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/estimation" element={<Estimation />}>
				<Route index element={<Estimate />} />
				<Route path="estimate" element={<Estimate />} />
				<Route path="result" element={<Result />} />
			</Route>
			<Route path="profile" element={<Profile />} />
			<Route path="about-us" element={<AboutUs />} />
		</Routes>
	);
}

export default App;
