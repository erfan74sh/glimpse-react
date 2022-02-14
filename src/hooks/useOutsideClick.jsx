import { useEffect } from "react";

const useOutsideClick = (ref, onClickOutside) => {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				onClickOutside && onClickOutside();
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [ref, onClickOutside]);
};

export default useOutsideClick;
