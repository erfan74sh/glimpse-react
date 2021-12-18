import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ closeModal, title, children }) => {
	return (
		<div
			className="h-screen w-screen fixed flex items-center justify-center bg-gray-500 bg-opacity-80 z-30"
			onClick={closeModal}
		>
			<section
				className="p-5 bg-white rounded-lg w-1/3"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<header className="pb-1 px-1 flex justify-between items-center border-b-2 border-gray-300">
					<h2>{title}</h2>
					<button
						className="w-8 text-gray-400 transition hover:text-gray-500"
						onClick={closeModal}
					>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</header>
				<section className="px-1 py-5">{children}</section>
			</section>
		</div>
	);
};

export default Modal;
