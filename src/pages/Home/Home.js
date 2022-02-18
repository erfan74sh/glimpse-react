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
			<Nav />
			<Header handleShowModal={handleShowEstimationModal} />
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
