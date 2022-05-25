import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<Link to='/'>
						<li>Home</li>
					</Link>
					<Link to='/api/list'>
						<li>API List</li>
					</Link>
					<Link to='/about'>
						<li>About</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
}
