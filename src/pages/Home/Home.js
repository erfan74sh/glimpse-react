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
import Header from "./Header";

const Home = () => {
	const [showEstimateModal, setShowEstimateModal] = useState(false);

	const handleShowEstimationModal = () => {
		setShowEstimateModal(true);
	};

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
			<Nav lang="persian" />
			<Header handleShowModal={handleShowEstimationModal} />
			<main className="mt-24" dir="rtl">
				<div id="work-frame">
					<WorkingProcess />
					<Simulations />
				</div>
				<section className="pb-40">
					<header className="relative mb-12 text-center">
						<span className="bg-blue-550 absolute left-1/2 top-1/2 z-0 block h-0.5 w-2/3 translate-y-1/2 -translate-x-1/2 transform"></span>
						<h3 className="text-blue-550 relative z-10 inline-block bg-white px-5 text-2xl font-bold">
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
