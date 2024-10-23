import Button from "@/src/shared/ui/Button";
import Image from "next/image";
import type { FC } from "react";
import Parallax from "./Parallax";

const Hero: FC = () => {
	return (
		<section className="container relative grid grid-cols-5 gap-10 items-center">
			<div className="text-gray col-span-3">
				<h1 className="font-serif text-5xl leading-none bg-gradient-to-l from-primary/30 to-transparent pt-3 rounded-r-full">
					Алиссум
				</h1>
				<h2 className="text-nowrap font-serif text-5xl leading-none">
					цветочная магия <br /> на каждый день
				</h2>
				<p className="font-medium text-nowrap text-3xl">
					От букетов до оформления событий - преобразите <br /> пространство с
					нами. Выберите из каталога или заказывайте <br /> индивидуально для
					любого случая
				</p>
				<Button variant="filled">Каталог товаров</Button>
			</div>
			<div className="relative col-span-2 flex justify-center">
				<Image
					src="/images/hero/flowers.png"
					className="relative bottom-16 mt-32 z-30"
					width={500}
					height={685}
					alt="Букет тюльпанов"
				/>
				<div className="size-full absolute bg-gradient-to-b from-primary/5 to-primary/60 rounded-b-full top-0 left-0">
					<div className="rounded-b-full bg-gradient-to-t from-white/10 to-transparent absolute top-0 bottom-8 inset-x-8">
						<div className="absolute bg-gradient-to-b from-primary/5 to-primary/30 inset-x-8 top-0 bottom-8 z-0 rounded-b-full" />
					</div>
				</div>
			</div>
			<Parallax />
		</section>
	);
};

export default Hero;
