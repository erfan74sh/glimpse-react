import React, { useState } from "react";
// components
import Nav from "../../components/Nav";
import Modal from "../../components/modal";
import EstimationModal from "./EstimationModal";
import Header from "./Header";
import EmbededAparat from "./EmbededAparat";
import WorkingProcess from "./WorkingProcess";
import Simulations from "./Simulations";
import RecomendedPackages from "../../components/recomendedPackages/RecomendedPackages";
import Footer from "./Footer";
// assets
import LifeCycleImg from "../../assets/images/lifecycle.png";
// style
import "./Home.scss";

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
			<main className="mt-24 font-irancell" dir="rtl">
				<EmbededAparat
					videoId={16504825167}
					videoUrl="https://www.aparat.com/embed/mVSx2?data[rnddiv]=16504825167&data[responsive]=yes"
				/>
				<section id="work-frame">
					<div className="mb-16 flex items-center justify-center">
						<img src={LifeCycleImg} alt="life-cycle" className="h-auto w-1/2" />
					</div>
					<WorkingProcess />
					<Simulations />
				</section>
				<EmbededAparat
					videoId={50092033836}
					videoUrl="https://www.aparat.com/embed/15r6z?data[rnddiv]=50092033836&data[responsive]=yes"
				/>
				<section className="pb-40">
					<header className="relative mb-12 text-center">
						<span className="absolute left-1/2 top-1/2 z-0 block h-0.5 w-2/3 translate-y-1/2 -translate-x-1/2 transform bg-blue-550"></span>
						<h3 className="relative z-10 inline-block bg-white px-5 text-2xl font-bold text-blue-550">
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
