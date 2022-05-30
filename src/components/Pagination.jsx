import {
	FaAngleLeft,
	FaAngleRight,
	FaAngleDoubleLeft,
	FaAngleDoubleRight,
} from 'react-icons/fa';
import ApiContext from '../context/ApiContext';
import { useContext } from 'react';

export default function Pagination() {
	const { currentPage, totalPages, pageNav, paginate } =
		useContext(ApiContext);
	return (
		<nav className='fixed bottom-1 h-16 w-3/5 flex flex-row justify-evenly items-center'>
			<ul className='h-full w-full flex flex-row justify-evenly items-center'>
				{currentPage > 1 && (
					<FaAngleDoubleLeft
						className='cursor-pointer'
						size={30}
						color={currentPage > 1 ? '#14213D' : '#CCCCCCaf'}
						onClick={() => paginate(1)}
					/>
				)}
				<FaAngleLeft
					className='cursor-pointer'
					size={30}
					color={currentPage > 1 ? '#14213D' : '#CCCCCCaf'}
					onClick={() => paginate(currentPage - 1)}
				/>
				{pageNav.map((num) => (
					<li
						key={num}
						className={`h-full w-11 flex flex-row justify-center items-center font-bold ${
							num === currentPage &&
							'border-2 border-solid border-secondary rounded text-secondary'
						}`}
						onClick={() => paginate(num)}>
						{num}
					</li>
				))}

				<FaAngleRight
					className='cursor-pointer'
					size={30}
					color={currentPage === totalPages ? '#CCCCCCaf' : '#14213D'}
					onClick={() => paginate(currentPage + 1)}
				/>
				{currentPage < totalPages && (
					<FaAngleDoubleRight
						className='cursor-pointer'
						size={30}
						color={currentPage <= totalPages ? '#14213D' : '#534D56'}
						onClick={() => paginate(totalPages)}
					/>
				)}
			</ul>
		</nav>
	);
}
