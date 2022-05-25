import { Outlet } from 'react-router-dom';
import ApiNav from '../components/ApiNav';

export default function ApiPage() {
	return (
		<div className='container h-screen w-full flex flex-col items-center justify-evenly relative'>
			<ApiNav />
			<Outlet />
		</div>
	);
}
