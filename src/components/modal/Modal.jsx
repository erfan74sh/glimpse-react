import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// hooks
// icons
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ closeModal, title, children }) => {
	// ! if want to close modal onClicking outside =>
	// ! => import useClickOutside hook and attach it's ref to section element bellow and
	// ! it's second arg to closeModal function from props
	return (
		<div className="fixed z-30 flex h-screen w-screen items-center justify-center bg-gray-500 bg-opacity-80">
			<section className="w-full rounded-lg bg-white px-3 py-4 sm:px-6 sm:py-6 md:w-auto">
				<header className="flex items-center justify-between border-b border-gray-400 px-1 pb-1">
					<h2 className="text-blue-550 font-medium capitalize">{title}</h2>
					<button
						className="w-8 text-gray-400 transition hover:text-gray-500"
						onClick={closeModal}
					>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</header>
				<section className="px-1 pt-5">{children}</section>
			</section>
		</div>
	);
};

export default Modal;
