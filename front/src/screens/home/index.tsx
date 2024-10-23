import type { FC } from "react";
import Hero from "./Hero";
import IndividualBouquets from "./IndividualBouquets";
import IndoorPlants from "./IndoorPlants";
import Novelties from "./Novelties";
import PottedPlants from "./PottedPlants";
import Sections from "./Sections";
import WhyAreWe from "./WhyAreWe";

const Home: FC = () => {
	return (
		<main className="space-y-40 mb-40">
			<Hero />
			<Sections />
			<Novelties />
			<WhyAreWe />
			<IndoorPlants />
			<IndividualBouquets />
			<PottedPlants />
		</main>
	);
};

export default Home;
