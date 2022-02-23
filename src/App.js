import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// components
import Loader from "./components/Loader/Loader";
// style
import "./App.scss";
// routes
import SignIn from "./pages/signIn-signUp/SignIn";
import SignUp from "./pages/signIn-signUp/SignUp";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./router/ProtectedRoutes";
// lazy load routes
const Result = lazy(() => import("./pages/Estimation/Result"));
const Estimate = lazy(() => import("./pages/Estimation/Estimate"));
const CompareZones = lazy(() =>
	import("./pages/Estimation/Result/CompareZones/CompareZones")
);
const Home = lazy(() => import("./pages/Home"));
const Estimation = lazy(() => import("./pages/Estimation"));
//
const Profile = lazy(() => import("./pages/Profile"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PricingPlans = lazy(() => import("./pages/PricingPlans"));
const SignInSignUp = lazy(() => import("./pages/signIn-signUp"));

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/estimation" element={<Estimation />}>
						<Route index element={<Estimate />} />
						<Route path="estimate" element={<Estimate />} />
					</Route>
					<Route path="result" element={<Result />}></Route>
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
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}

export default App;
