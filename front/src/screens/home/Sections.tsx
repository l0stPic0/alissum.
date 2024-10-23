import Button from "@/src/shared/ui/Button";
import Image from "next/image";
import type { FC } from "react";

const Sections: FC = () => {
	return (
		<section className="container grid grid-cols-2 grid-rows-[repeat(3,80px)] gap-4">
			<article className="flex items-center shadow-lg rounded-[40px] row-span-full">
				<div className="relative flex items-center justify-center aspect-square">
					<Image
						src="/images/sections/bouquets.png"
						width={320}
						height={310}
						className="relative bottom-6 z-10 flex-shrink-0"
						alt="Букет цветов"
					/>
					<div className="absolute left-0 bottom-0 w-full h-5/6 rounded-tr-[60px] rounded-bl-[40px] bg-[#E0CBC5]" />
				</div>
				<div className="flex flex-col justify-between items-start gap-12 p-9">
					<p className="font-serif text-4xl leading-none">Изысканные букеты</p>
					<Button variant="primary">Подробнее</Button>
				</div>
			</article>
			<article className="flex shadow-lg rounded-full">
				<div className="relative w-32 flex items-center justify-center bg-[#E0E0C5] rounded-l-full">
					<Image
						src="/images/sections/marriages.png"
						width={90}
						height={111}
						className="relative bottom-4 left-2 z-10 flex-shrink-0"
						alt="Цветы в вазе"
					/>
				</div>
				<div className="flex justify-between items-center gap-12 p-5 w-full">
					<p className="font-serif text-3xl leading-none">Оформление свадеб</p>
					<Button variant="primary">Подробнее</Button>
				</div>
			</article>
			<article className="flex shadow-lg rounded-full">
				<div className="relative w-32 flex items-center justify-center bg-[#C5D4E0] rounded-l-full">
					<Image
						src="/images/sections/offices.png"
						width={90}
						height={111}
						className="relative bottom-4 left-0 z-10 flex-shrink-0"
						alt="Растение в горшке"
					/>
				</div>
				<div className="flex justify-between items-center gap-12 p-5 w-full">
					<p className="font-serif text-3xl leading-none">Декор для офисов</p>
					<Button variant="primary">Подробнее</Button>
				</div>
			</article>
			<article className="flex shadow-lg rounded-full">
				<div className="relative w-32 flex items-center justify-center bg-[#CCE0C5] rounded-l-full">
					<Image
						src="/images/sections/potted.png"
						width={90}
						height={111}
						className="relative bottom-4 left-2 z-10 flex-shrink-0"
						alt="Растение в горшке"
					/>
				</div>
				<div className="flex justify-between items-center gap-12 p-5 w-full">
					<p className="font-serif text-3xl leading-none">Горшечные растения</p>
					<Button variant="primary">Подробнее</Button>
				</div>
			</article>
		</section>
	);
};

export default Sections;
