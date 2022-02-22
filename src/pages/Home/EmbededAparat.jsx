import React from "react";
import useScript from "../../hooks/useScript";

const EmbededAparat = ({ videoId, videoUrl }) => {
	useScript(videoId, {
		type: "text/JavaScript",
		src: videoUrl,
		async: true,
	});

	return (
		<section className="my-18 mx-auto max-w-4xl">
			<div id={videoId}></div>
		</section>
	);
};

export default EmbededAparat;
