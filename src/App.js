import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ApiExplorer from './pages/ApiExplorer';
import HomePage from './pages/HomePage';

export default function App() {
	return (
		<div className='container h-screen w-full flex flex-col items-center justify-evenly relative'>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/api' element={<ApiExplorer />} />
			</Routes>
		</div>
	);
}
