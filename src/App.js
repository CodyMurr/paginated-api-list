import ApiList from './components/ApiList';
import ApiCats from './components/ApiCats';
import { ApiProvider } from './context/ApiContext';
import { useState } from 'react';

export default function App() {
	const [content, setContent] = useState('api');

	return (
		<div className='h-max w-full flex flex-col items-center justify-evenly'>
			<header className='container flex justify-center'>
				<nav className='w-3/5 flex flex-row justify-center'>
					<p
						className={`${
							content === 'api' && 'underline'
						} text-xl text-center w-1/2`}
						onClick={() => setContent('api')}>
						All Apis
					</p>
					<p
						className={`${
							content === 'category' && 'underline'
						} text-xl text-center w-1/2`}
						onClick={() => setContent('category')}>
						Categories
					</p>
				</nav>
			</header>
			<ApiProvider>
				{content === 'api' ? <ApiList /> : <ApiCats />}
			</ApiProvider>
		</div>
	);
}
