import React, { useState } from "react";
// components
import Nav from "../../components/Nav";
import Modal from "../../components/modal";
import EstimationModal from "./EstimationModal";
import RecomendedPackages from "../../components/recomendedPackages/RecomendedPackages";
import WorkingProcess from "./WorkingProcess";
import Simulations from "./Simulations";
import Footer from "./Footer";
// style
import "./Home.scss";

const Home = () => {
	const [showEstimateModal, setShowEstimateModal] = useState(false);

	return (
		<>
			{showEstimateModal && (
				<Modal
					title="start estimation"
					closeModal={() => setShowEstimateModal(false)}
				>
					<EstimationModal />
				</Modal>
			)}
			<Nav />
			<header
				className="relative mt-10 flex flex-col items-center"
				id="header__hero"
			>
				<div className="relative h-screen w-1/2">
					<section className="absolute bottom-44 left-0 w-max ">
						<h1 className="mb-4 text-5xl font-extrabold text-white">
							platform title here
						</h1>
						<button
							type="button"
							className="text-blue-550 hover:bg-blue-550 rounded-b-full rounded-t-full border-none bg-white px-9 py-4 text-lg font-medium outline-none transition-all hover:text-white"
							onClick={() => setShowEstimateModal(true)}
						>
							calculate now
						</button>
					</section>
				</div>
				<section className="w-1/2 text-lg font-medium">
					<h2 className="text-blue-550 mb-2 text-center font-bold">Glimpse</h2>
					<p className="text-justify leading-6">
						Civil engineering is a professional engineering discipline that
						deals with the design, construction, and maintenance of the physical
						and naturally built environment, including public works such as
						roads, bridges, canals, dams, airports, sewerage systems, pipelines,
						structural components of buildings, and railways.
						<br />g from military engineering. Civil engineering can take place
						in the public sector from municipal public works departments through
						to federal government agencies, and in the private sector from
						locally based firms to global Fortune 500 companies.
					</p>
				</section>
			</header>
			<main className="mt-24" dir="rtl">
				<div id="work-frame">
					<WorkingProcess />
					<Simulations />
				</div>
				<section className="pb-40">
					<header className="flex flex-col-reverse items-center pb-12">
						<h3 className="text-blue-550 text-2xl font-bold">
							بسته‌های پیشنهادی
						</h3>
					</header>
					<RecomendedPackages />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
