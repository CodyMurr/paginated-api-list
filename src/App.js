import ApiList from './components/ApiList';
// import ApiCats from './components/ApiCats';
import { ApiProvider } from './context/ApiContext';

export default function App() {
	return (
		<div className='h-max w-full flex flex-col items-center justify-evenly'>
			<ApiProvider>
				<ApiList />
			</ApiProvider>
		</div>
	);
}
