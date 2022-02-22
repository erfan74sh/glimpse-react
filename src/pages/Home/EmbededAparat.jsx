import React from "react";
import useScript from "../../hooks/useScript";

const EmbededAparat = ({ videoId }) => {
	useScript(videoId, {
		type: "text/JavaScript",
		src: `https://www.aparat.com/embed/ZHdED?data[rnddiv]=${videoId}&data[responsive]=yes`,
		async: true,
	});

	return (
		<section className="my-18 mx-auto max-w-4xl">
			<div id={videoId}></div>
		</section>
	);
};

export default EmbededAparat;
