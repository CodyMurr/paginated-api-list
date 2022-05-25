import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		// <header>
		<header className='w-full h-20 flex flex-row justify-evenly items-center bg-blue-900'>
			<nav className='w-full h-full'>
				<ul className='w-1/2 h-full flex justify-evenly items-center'>
					<li className='h-full w-1/3'>
						<Link
							className='flex justify-center items-center text-orange-500 text-xl hover:bg-orange-500 hover:text-white w-full h-full'
							to='/'>
							Home
						</Link>
					</li>
					<li className='h-full w-1/3'>
						<Link
							className='flex justify-center items-center text-orange-500 text-xl hover:bg-orange-500 hover:text-white w-full h-full'
							to='/api'>
							API Explorer
						</Link>
					</li>
					<li className='h-full w-1/3'>
						<Link
							className='flex justify-center items-center text-orange-500 text-xl hover:bg-orange-500 hover:text-white w-full h-full'
							to='/about'>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
