import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
// components
import Loader from "../components/Loader/Loader";

// routes
import SignIn from "../pages/signIn-signUp/SignIn";
import SignUp from "../pages/signIn-signUp/SignUp";
import NotFound from "../pages/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import Verifyy from "../pages/Payment/Verify";
import Payment from "../pages/Payment/Payment";
// lazy load routes
const Result = lazy(() => import("../pages/Estimation/Result"));
const Estimate = lazy(() => import("../pages/Estimation/Estimate"));
const CompareZones = lazy(() =>
	import("../pages/Estimation/Result/CompareZones/CompareZones")
);
const Home = lazy(() => import("../pages/Home"));
const Estimation = lazy(() => import("../pages/Estimation"));
const Profile = lazy(() => import("../pages/Profile"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const PricingPlans = lazy(() => import("../pages/PricingPlans"));
const SignInSignUp = lazy(() => import("../pages/signIn-signUp"));

const Router = () => {
	return (
		<BrowserRouter>
			<Scrollbars style={{ width: "100vw", height: "100vh" }}>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route element={<ProtectedRoutes />}>
							<Route path="/estimation" element={<Estimation />}>
								<Route index element={<Estimate />} />
								<Route path="estimate" element={<Estimate />} />
								<Route path=":subset/:simulationId" element={<Estimate />} />
							</Route>
							<Route path="result" element={<Result />}></Route>
							<Route path="compare-zones" element={<CompareZones />} />
							<Route path="profile" element={<Profile />} />
							<Route path="payment" element={<Payment />}>
								<Route path="verify" element={<Verifyy />} />
							</Route>
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
			</Scrollbars>
		</BrowserRouter>
	);
};

export default Router;
