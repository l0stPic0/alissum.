"use client";
import Image from "next/image";
import { type FC, useEffect, useState } from "react";

const Parallax: FC = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const parallaxStyle1 = {
		transform: `translateY(${scrollY * 0.1}px)`,
	};

	const parallaxStyle2 = {
		transform: `translateY(${scrollY * 0.4}px)`,
	};

	const parallaxStyle3 = {
		transform: `translateY(${scrollY * 0.3}px)`,
	};

	return (
		<div className="pointer-events-none">
			<Image
				src="/images/hero/parallax-1.png"
				className="absolute -top-1/4 -left-1/4"
				width={804}
				height={546}
				alt="Лепестки цветов"
				style={parallaxStyle1}
			/>
			<Image
				src="/images/hero/parallax-2.png"
				className="absolute -top-20 right-1/3"
				width={472}
				height={416}
				alt="Лепестки цветов"
				style={parallaxStyle2}
			/>
			<Image
				src="/images/hero/parallax-3.png"
				className="absolute top-0 -right-40"
				width={918}
				height={769}
				alt="Лепестки цветов"
				style={parallaxStyle3}
			/>
		</div>
	);
};

export default Parallax;
