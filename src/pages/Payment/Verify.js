import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
// icons
import {
	faCheckCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Verifyy = () => {
	const [succsessfullPayment, setSuccsessfullPayment] = useState(false);
	const [paymentData, setPaymentData] = useState({});
	useEffect(() => {
		const verifyPayment = async () => {
			try {
				const response = await Axios.post(
					"https://api.zarinpal.com/pg/v4/payment/verify.json",
					{
						merchant_id: "4ced0a1e-4ad8-4309-9668-3ea3ae8e8897",
						amount: "1000",
						authority: "A00000000000000000000000000000000002",
					}
				);
				setPaymentData({ ...response.data.data });
				const { code, card_pan, ref_id } = response.data.data;
				if (code === 100 || code === 101) {
					setSuccsessfullPayment(true);
				}
				console.log({ code, card_pan, ref_id });
			} catch (err) {
				console.log(err);
			}
		};
		verifyPayment();
	}, []);

	return (
		<div className="flex min-h-screen items-center justify-center gap-x-10 bg-gray-50 px-40">
			<div className="flex min-w-max flex-col content-center items-center rounded-xl bg-white px-10 py-3 shadow-xl ">
				<div className="flex w-full flex-col items-center gap-y-2 border-b-2 border-dashed py-5">
					<div
						className={`flex flex-col items-center gap-y-2 text-3xl font-bold ${
							succsessfullPayment ? "text-green-500" : "text-red-500"
						}`}
					>
						<FontAwesomeIcon
							icon={succsessfullPayment ? faCheckCircle : faTimesCircle}
							size="2x"
						/>
						<span>
							{succsessfullPayment
								? "پرداخت شما با موفقیت انجام شد!"
								: "پرداخت ناموفق بود!"}
						</span>
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
					<button className="self-center">
						<Link
							to="/"
							className="bg-blue-550 flex items-center rounded-md px-5 py-1.5 text-white"
						>
							Go Home
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Verifyy;
