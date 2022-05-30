import ApiList from './components/ApiList';
import ApiCats from './components/ApiCats';
import { ApiProvider } from './context/ApiContext';
import { useState } from 'react';
import Header from './components/Header';

export default function App() {
	const [content, setContent] = useState('api');

	return (
		<div className='box-border h-screen w-screen bg-base-300'>
			<Header content={content} setContent={setContent} />
			<ApiProvider>
				{content === 'api' ? <ApiList /> : <ApiCats />}
			</ApiProvider>
		</div>
	);
}
