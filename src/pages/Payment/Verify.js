import {
	faCheckCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// assets
import PaymentIlus from "../../assets/images/undraw_personal.svg";

const Verifyy = () => {
	return (
		<div className="flex min-h-screen items-center justify-center gap-x-5 bg-gray-50 px-48">
			<div className="">
				<img src={PaymentIlus} alt="ilustration" className="w-113 h-auto" />
			</div>
			<div className="w-100 flex flex-col items-center rounded-xl bg-white px-8 shadow-xl ">
				<div className="flex flex-col items-center gap-y-2 border-b-2 border-dashed py-5">
					<div
						className={`flex flex-col items-center gap-y-2 text-3xl font-bold ${
							true ? "text-green-500" : "text-red-500"
						}`}
					>
						<FontAwesomeIcon
							icon={true ? faCheckCircle : faTimesCircle}
							size="2x"
						/>
						<span>{true ? "پرداخت موفق بود!" : "پرداخت ناموفق بود!"}</span>
					</div>
					<div className="flex items-center gap-x-1 text-gray-500">
						<span>شماره تراکنش:</span>
						<span>۱۲۳۴۵۶۷۸۹</span>
					</div>
				</div>
				<div>
					<div>
						<span>مبلغ:</span>
						<span>100 هزار تومان</span>
					</div>
					<button>go home</button>
				</div>
			</div>
		</div>
	);
};

export default Verifyy;
