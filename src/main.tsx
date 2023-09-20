import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router';
import {QueryClient, QueryClientProvider} from 'react-query';

import {router} from './router';
//! Remover enable css source maps
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import {ReactQueryDevtools} from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools/>
			<RouterProvider router={router}/>
		</QueryClientProvider>
	</React.StrictMode>
);
