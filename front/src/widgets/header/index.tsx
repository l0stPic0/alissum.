import type { FC } from "react";

import Link from "next/link";

import Cart from "./Cart";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Phone from "./Phone";
import Search from "./Search";
import Socials from "./Socials";

const Header: FC = () => {
	return (
		<header className="sticky top-0 z-50 bg-white shadow-lg">
			<div className="container mx-auto flex items-center justify-between py-4">
				<Link href="/">
					<Logo />
				</Link>
				<Search />
				<Navigation />
				<Phone />
				<Socials />
				<Cart />
			</div>
		</header>
	);
};

export default Header;
