import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage, CellPhonesPage, AboutPage, CellPhonePage } from '../pages';
import { FcCellPhone } from 'react-icons/fc';

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
				path: 'celulares/:slug',
				element: <CellPhonePage/>
			},
			{
				path: 'nosotros',
				element: <AboutPage />,
			},
		],
	},
]);