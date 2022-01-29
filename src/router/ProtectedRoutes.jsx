import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// slice
import { selectUser } from "../features/auth/authSlice";

const ProtectedRoutes = () => {
	const { isLoggedIn, user } = useSelector(selectUser);

	return isLoggedIn && user ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoutes;
