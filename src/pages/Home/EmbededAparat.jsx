import React, { useEffect } from "react";

const EmbededAparat = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.type = "text/JavaScript";
		script.src =
			"https://www.aparat.com/embed/ZHdED?data[rnddiv]=46590385690&data[responsive]=yes";
		script.async = true;

		const wrapperEl = document.getElementById(46590385690);

		wrapperEl.appendChild(script);
	}, []);

	return (
		<section className="my-18 mx-auto max-w-4xl">
			<div id="46590385690" className=""></div>
		</section>
	);
};

export default EmbededAparat;
