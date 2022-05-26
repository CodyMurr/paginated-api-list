import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ApiPage from './pages/ApiPage';
import HomePage from './pages/HomePage';
import ApiList from './components/ApiList';
import ApiCats from './components/ApiCats';
import Category from './components/Category';

export default function App() {
	return (
		<div className='container h-max w-full flex flex-col items-center justify-evenly'>
			<Navbar />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/api' element={<ApiPage />}>
					<Route path='/api/list' element={<ApiList />} />
					<Route path='/api/categories' element={<ApiCats />} />
					<Route
						path='/api/categories/:category'
						element={<Category />}
					/>
				</Route>
			</Routes>
		</div>
	);
}
