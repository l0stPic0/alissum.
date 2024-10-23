import "./globals.css";

import TanStackQueryProvider from "@/src/providers/TanstackQueryProvider";
import Header from "@/src/widgets/header";
import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

import { Wix_Madefor_Display } from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
	title: "Алиссум",
};

const wix = Wix_Madefor_Display({
	subsets: ["latin"],
	variable: "--font-wix",
});

const leotaro = localFont({
	src: [
		{
			path: "../public/fonts/Leotaro-Regular.woff2",
			weight: "400",
		},
		{
			path: "../public/fonts/Leotaro-Regular.woff",
			weight: "400",
		},
		{
			path: "../public/fonts/Leotaro-Regular.otf",
			weight: "400",
		},
	],
	variable: "--font-leotaro",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="ru">
			<body
				className={`${wix.variable} ${leotaro.variable} font-sans overflow-x-hidden`}
			>
				<TanStackQueryProvider>
					<Header />
					{children}
				</TanStackQueryProvider>
			</body>
		</html>
	);
};

export default RootLayout;
