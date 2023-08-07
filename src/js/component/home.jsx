import React from "react";
import Navbar from "./Navbar"
import BodyContent from "./Body"
import Footer from "./Footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<div className="row bg-dark">
				<Navbar />
			</div>
			<div className="row">
				<BodyContent />
			</div>
			<div className="row bg-dark">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
