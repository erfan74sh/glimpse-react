import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
//
//
import SignIn from "./pages/signIn-signUp/SignIn";
import SignUp from "./pages/signIn-signUp/SignUp";
// protectedRoute
import ProtectedRoutes from "./router/ProtectedRoutes";
// import Result from "./pages/Estimation/Result";
// import Zone from "./pages/Estimation/Result/Zone/Zone";
// import Estimate from "./pages/Estimation/Estimate";
// import CompareZones from "./pages/Estimation/Result/CompareZones/CompareZones";
import "./App.scss";
//
//
const Result = lazy(() => import("./pages/Estimation/Result"));
const Zone = lazy(() => import("./pages/Estimation/Result/Zone/Zone"));
const Estimate = lazy(() => import("./pages/Estimation/Estimate"));
const CompareZones = lazy(() =>
	import("./pages/Estimation/Result/CompareZones/CompareZones")
);
// pages
const Home = lazy(() => import("./pages/Home"));
// import Home from "./pages/Home";
// path: estimation
const Estimation = lazy(() => import("./pages/Estimation"));
// import Estimation from "./pages/Estimation";
//
const Profile = lazy(() => import("./pages/Profile"));
// import Profile from "./pages/Profile";
const AboutUs = lazy(() => import("./pages/AboutUs"));
// import AboutUs from "./pages/AboutUs";
const ContactUs = lazy(() => import("./pages/ContactUs"));
// import ContactUs from "./pages/ContactUs";
const PricingPlans = lazy(() => import("./pages/PricingPlans"));
// import PricingPlans from "./pages/PricingPlans";
// path: auth
const SignInSignUp = lazy(() => import("./pages/signIn-signUp"));
// import SignInSignUp from "./pages/signIn-signUp";
// style

function App() {
	return (
		<Suspense fallback={<div>loading</div>}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/estimation" element={<Estimation />}>
						<Route index element={<Estimate />} />
						<Route path="estimate" element={<Estimate />} />
					</Route>
					<Route path="result" element={<Result />}>
						{/* <Route path=":zoneId" element={<Zone />} /> */}
					</Route>
					<Route path="compare-zones" element={<CompareZones />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="about-us" element={<AboutUs />} />
				<Route path="contact-us" element={<ContactUs />} />
				<Route path="pricing" element={<PricingPlans />} />
				<Route path="auth" element={<SignInSignUp />}>
					<Route index element={<SignIn />} />
					<Route path="sign-in" element={<SignIn />} />
					<Route path="sign-up" element={<SignUp />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
