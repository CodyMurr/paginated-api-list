import {
	FaAngleLeft,
	FaAngleRight,
	FaAngleDoubleLeft,
	FaAngleDoubleRight,
} from 'react-icons/fa';
import ApiContext from '../context/ApiContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Pagination() {
	const { currentPage, totalPages, pageNav, paginate } =
		useContext(ApiContext);

	return (
		<nav className='container h-16 w-full bg-orange-500 flex flex-row justify-evenly items-center fixed bottom-0'>
			{currentPage > 1 && (
				<FaAngleDoubleLeft
					className='cursor-pointer'
					size={40}
					color={currentPage > 1 ? '#14213D' : '#CCCCCCaf'}
					onClick={() => paginate(1)}
				/>
			)}
			<FaAngleLeft
				className='cursor-pointer'
				size={40}
				color={currentPage > 1 ? '#14213D' : '#CCCCCCaf'}
				onClick={() => paginate(currentPage - 1)}
			/>
			<ul className='h-full w-9/12 flex flex-row justify-evenly items-center'>
				{pageNav.map((num) => (
					<Link
						to='#'
						className={
							num === currentPage &&
							'flex flex-row justify-center items-center bg-slate-900 text-xl text-slate-100 border-solid rounded-2xl border-slate-700 shadow-md w-1/12 h-full'
						}
						onClick={() => paginate(num)}>
						<li
							key={num}
							className='h-full w-full flex flex-row justify-center items-center'>
							{num}
						</li>
					</Link>
				))}
			</ul>

			<FaAngleRight
				className='cursor-pointer'
				size={40}
				color={currentPage <= totalPages ? '#14213D' : '#534D56'}
				onClick={() => paginate(currentPage + 1)}
			/>
			{currentPage < totalPages && (
				<FaAngleDoubleRight
					className='cursor-pointer'
					size={40}
					color={currentPage <= totalPages ? '#14213D' : '#534D56'}
					onClick={() => paginate(totalPages)}
				/>
			)}
		</nav>
	);
}
