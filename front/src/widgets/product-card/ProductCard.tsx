import Button from "@/src/shared/ui/Button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";

const ProductCard: FC = () => {
	return (
		<Link href="#">
			<article className="relative text-center rounded-b-[98px] shadow-lg">
				<div className="w-full h-96 bg-neutral-100" />
				<div className="p-6">
					<p className="text-xl">Букет с белой розой</p>
					<p className="text-3xl font-semibold">1 200 р</p>
				</div>
				<div className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full -bottom-8">
					<Button variant="secondary">
						<ShoppingCart size={18} />
					</Button>
				</div>
			</article>
		</Link>
	);
};

export default ProductCard;
