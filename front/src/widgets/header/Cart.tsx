import { ShoppingCart } from "lucide-react";
import type { FC } from "react";
const Cart: FC = () => {
	return (
		<button
			className="bg-secondary-dark hover:bg-secondary transition-colors rounded-full text-white p-2"
			type="button"
		>
			<ShoppingCart size={18} />
		</button>
	);
};

export default Cart;
