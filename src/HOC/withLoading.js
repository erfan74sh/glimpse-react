import React, { useState } from "react";

const withLoading = (WrappedComponent, loadingMsg) => {
	return (props) => {
		const [isLoading, setIsLoading] = useState(true);

		const handleIsLoading = (isComponentLoading) =>
			setIsLoading(isComponentLoading);

		return (
			<>
				{isLoading && <span>loading from hoc: {loadingMsg}</span>}
				<WrappedComponent {...props} setLoading={handleIsLoading} />
			</>
		);
	};
};

export default withLoading;
