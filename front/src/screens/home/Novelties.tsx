"use client";
import Button from "@/src/shared/ui/Button";
import ProductCard from "@/src/widgets/product-card/ProductCard";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type FC, useEffect, useState } from "react";

const Novelties: FC = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		slidesToScroll: "auto",
	});

	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

	useEffect(() => {
		if (emblaApi)
			emblaApi.on("select", (emblaApi) => {
				setPrevBtnDisabled(!emblaApi.canScrollPrev());
				setNextBtnDisabled(!emblaApi.canScrollNext());
			});
	}, [emblaApi]);

	return (
		<section className="container">
			<header className="flex items-center justify-between gap-6">
				<h2 className="font-serif text-4xl">Новинки</h2>
				<div className="w-full h-1 bg-gradient-to-r from-primary/30 to-transparent" />
				<div className="flex items-center gap-6">
					<Button variant="primary">Посмотреть все</Button>
					<div className="flex items-center gap-2">
						<Button
							disabled={prevBtnDisabled}
							onClick={() => emblaApi?.scrollPrev()}
							variant="secondary"
						>
							<ChevronLeft />
						</Button>
						<Button
							disabled={nextBtnDisabled}
							onClick={() => emblaApi?.scrollNext()}
							variant="secondary"
						>
							<ChevronRight />
						</Button>
					</div>
				</div>
			</header>
			<div ref={emblaRef}>
				<div className="flex ml-[calc(16px*-1)]">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
						<div className="w-1/4 flex-none pl-4" key={index}>
							<ProductCard />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Novelties;
