import { Phone as PhoneIcon } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";

const Phone: FC = () => {
	return (
		<Link
			className="flex items-center gap-2 font-medium"
			href="tel:89264974500"
		>
			<PhoneIcon size={18} /> 8 926 497 45 00
		</Link>
	);
};

export default Phone;
