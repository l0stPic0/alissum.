import Button from "@/src/shared/ui/Button";
import ProductCard from "@/src/widgets/product-card/ProductCard";
import type { FC } from "react";

const IndoorPlants: FC = () => {
	return (
		<section className="container">
			<header className="flex items-center justify-between gap-6">
				<h2 className="font-serif text-4xl flex-shrink-0">
					Горшечные растения
				</h2>
				<div className="w-full h-1 bg-gradient-to-r from-primary/30 to-transparent" />
				<Button variant="primary">Посмотреть все</Button>
			</header>
			<div className="grid grid-cols-4 gap-x-4 gap-y-12">
				{[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
					<ProductCard key={index} />
				))}
			</div>
		</section>
	);
};

export default IndoorPlants;
