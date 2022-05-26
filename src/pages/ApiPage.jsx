import { Outlet } from 'react-router-dom';
import ApiNav from '../components/ApiNav';
import { ApiProvider } from '../context/ApiContext';

export default function ApiPage() {
	return (
		<ApiProvider>
			<div className='container h-max w-full flex flex-col items-center justify-evenly relative'>
				<h2>API Explorer</h2>
				<ApiNav />
				<Outlet />
			</div>
		</ApiProvider>
	);
}
