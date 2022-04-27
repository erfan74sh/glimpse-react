import React, { useState } from "react";
// components
import Loader from "../components/Loader/Loader";

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
