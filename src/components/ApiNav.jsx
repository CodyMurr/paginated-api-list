import { Link } from 'react-router-dom';

export default function ApiNav() {
	return (
		<nav className='w-full flex justify-center'>
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
