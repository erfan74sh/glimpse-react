import React, { useEffect } from "react";
import useScript from "../../hooks/useScript";

const EmbededAparat = () => {
	useScript(46590385690, {
		type: "text/JavaScript",
		src: "https://www.aparat.com/embed/ZHdED?data[rnddiv]=46590385690&data[responsive]=yes",
		async: true,
	});

	return (
		<section className="my-18 mx-auto max-w-4xl">
			<div id="46590385690" className=""></div>
		</section>
	);
};

export default EmbededAparat;
