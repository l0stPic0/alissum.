import Button from "@/src/shared/ui/Button";
import Image from "next/image";
import type { FC } from "react";

const IndividualBouquets: FC = () => {
	return (
		<section className="relative bg-gradient-to-r from-primary/10 to-primary/70">
			<div className="container grid grid-cols-2 items-center gap-32 py-12">
				<div className="text-nowrap">
					<h2 className="font-serif text-4xl">Индивидуальные букеты</h2>
					<p className="font-medium text-2xl">
						Создайте уникальные букет для себя и близких
					</p>
					<p className="text-lg">
						Наши флористы создадут букет по вашим предпочтениям, превратив его в{" "}
						<br />
						произведение искусства, которое выразит ваши чувства и доставит
						радость
					</p>
					<Button className="text-base" variant="filled">
						Собрать букет
					</Button>
				</div>
			</div>
			<div className="absolute top-0 right-0 bottom-0 h-full py-3 pointer-events-none">
				<Image
					src="/images/individual-bouquets/bg.png"
					alt="Букет роз на столе"
					className="h-full object-cover rounded-l-full"
					width={911}
					height={354}
				/>
				<Image
					src="/images/individual-bouquets/flowers.png"
					alt="Цветы"
					className="absolute -top-8 left-[253px]"
					width={407}
					height={257}
				/>
			</div>
		</section>
	);
};

export default IndividualBouquets;
