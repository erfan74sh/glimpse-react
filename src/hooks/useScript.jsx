import { useEffect } from "react";

const useScript = (wrapperElId, attributes) => {
	useEffect(() => {
		const script = document.createElement("script");
		console.log(attributes);
		for (const attr in attributes) {
			script[attr] = attributes[attr];
		}

		const wrapperEl = document.getElementById(wrapperElId);
		console.log(script);

		wrapperEl.appendChild(script);

		return () => {
			while (wrapperEl.firstChild) {
				wrapperEl.removeChild(wrapperEl.firstChild);
			}
		};
	}, [wrapperElId, attributes]);
};

export default useScript;
