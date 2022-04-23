import {
	faCheckCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Verifyy = () => {
	return (
		<div className="flex min-h-screen items-center justify-center gap-x-10 bg-gray-50 px-40">
			<div className="w-113 flex flex-col content-center items-center rounded-xl bg-white px-10 py-3 shadow-xl ">
				<div className="flex w-full flex-col items-center gap-y-2 border-b-2 border-dashed py-5">
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
				<div className="flex w-full flex-col gap-y-10 py-5">
					<div className="flex justify-between font-medium text-gray-500">
						<span>مبلغ پرداخت شده:</span>
						<span>100 هزار تومان</span>
					</div>
					<button>go home</button>
				</div>
			</div>
		</div>
	);
};

export default Verifyy;
