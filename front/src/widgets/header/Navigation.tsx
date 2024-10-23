import Button from "@/src/shared/ui/Button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
const Navigation: FC = () => {
	return (
		<nav>
			<ul className="flex items-center gap-7 font-medium">
				<li>
					<Button
						variant="primary"
						className="text-primary bg-primary/10 hover:bg-primary/15 transition-colors flex items-center gap-1 px-8 py-3 rounded-full"
					>
						Каталог <ChevronDown className="mt-1" size={16} />
					</Button>
				</li>
				<li>
					<Link href="/contacts">Контакты</Link>
				</li>
				<li>
					<Link href="/delivery">Доставка</Link>
				</li>
				<li>
					<Link href="/about-us">О нас</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
