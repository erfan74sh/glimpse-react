import React, { useState } from "react";
import Loader from "../components/Loader/Loader";
// components

const withLoading = (WrappedComponent, loadingMsg) => {
	return (props) => {
		const [isLoading, setIsLoading] = useState(true);

		const handleIsLoading = (isComponentLoading) =>
			setIsLoading(isComponentLoading);

		return (
			<>
				{isLoading && <Loader message={loadingMsg} />}
				<WrappedComponent {...props} setLoading={handleIsLoading} />
			</>
		);
	};
};

export default withLoading;
