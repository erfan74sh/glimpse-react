import React from "react";

const Modal = () => {
	return (
		<div className="h-screen w-screen fixed flex items-center justify-center bg-white bg-opacity-80 z-30">
			<section className="p-5 bg-white rounded-lg w-1/3 h-1/2">
				<header className="flex justify-between items-center">
					<h2>modal title here</h2>
					<button>x</button>
				</header>
			</section>
		</div>
	);
};

export default Modal;
