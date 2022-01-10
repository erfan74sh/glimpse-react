import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
// path: estimation
import Estimation from "./pages/Estimation";
import Result from "./pages/Estimation/Result";
import Zone from "./pages/Estimation/Result/Zone/Zone";
import Estimate from "./pages/Estimation/Estimate";
import CompareZones from "./pages/Estimation/Result/CompareZones/CompareZones";
//
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PricingPlans from "./pages/PricingPlans";
// path: auth
import SignInSignUp from "./pages/signIn-signUp";
import SignIn from "./pages/signIn-signUp/SignIn";
import SignUp from "./pages/signIn-signUp/SignUp";
// style
import "./App.scss";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/estimation" element={<Estimation />}>
				<Route index element={<Estimate />} />
				<Route path="estimate" element={<Estimate />} />
				<Route path="result" element={<Result />}>
					<Route path=":zoneId" element={<Zone />} />
				</Route>
				<Route path="compare-zones" element={<CompareZones />} />
			</Route>
			<Route path="profile" element={<Profile />} />
			<Route path="about-us" element={<AboutUs />} />
			<Route path="contact-us" element={<ContactUs />} />
			<Route path="pricing" element={<PricingPlans />} />
			<Route path="auth" element={<SignInSignUp />}>
				<Route index element={<SignIn />} />
				<Route path="sign-in" element={<SignIn />} />
				<Route path="sign-up" element={<SignUp />} />
			</Route>
		</Routes>
	);
}

export default App;
