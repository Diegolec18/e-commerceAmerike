import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage, CellPhonesPage, AboutPage } from '../pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'celulares',
				element: <CellPhonesPage />,
			},
			{
				path: 'nosotros',
				element: <AboutPage />,
			},
		],
	},
]);