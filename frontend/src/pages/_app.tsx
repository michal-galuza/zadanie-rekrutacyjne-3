import '../styles/globals.css';

import { FC, useState } from 'react';
import { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 20 * 1000,
					},
				},
			}),
	);
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default App;
