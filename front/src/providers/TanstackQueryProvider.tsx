"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type FC, type PropsWithChildren, useState } from "react";

const TanStackQueryProvider: FC<PropsWithChildren> = ({ children }) => {
	const [client] = useState(new QueryClient());

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default TanStackQueryProvider;
