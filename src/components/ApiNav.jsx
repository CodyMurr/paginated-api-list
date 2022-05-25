import { Link } from 'react-router-dom';

export default function ApiNav() {
	return (
		<nav className='w-full flex justify-center border-2 border-solid border-blue-800'>
			<ul className='flex flex-row w-1/2 justify-evenly'>
				<Link to='/api/list'>
					<li>See Full List</li>
				</Link>
				<Link to='/api/categories'>
					<li>Categories</li>
				</Link>
			</ul>
		</nav>
	);
}
