import type { FC } from "react";

const WhyAreWe: FC = () => {
	return (
		<section className="container">
			<header className="flex items-center justify-between gap-6">
				<h2 className="font-serif text-4xl flex-shrink-0">Почему мы?</h2>
				<div className="w-full h-1 bg-gradient-to-r from-primary/30 to-transparent" />
			</header>
		</section>
	);
};

export default WhyAreWe;
