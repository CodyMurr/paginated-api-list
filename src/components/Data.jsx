import ApiContext from '../context/ApiContext';
import { useContext } from 'react';

export default function Data() {
	const { currentData, loading } = useContext(ApiContext);
	if (loading) {
		return <h2>Loading...</h2>;
	}
	return (
		<div className='w-full h-full p-1 flex flex-col justify-evenly items-center overflow-scroll'>
			{currentData.map((d, idx) => (
				<section
					className='p-3 w-4/5 h-40 border-solid border-2 border-amber-700 rounded-lg'
					key={`${d}-${idx}`}>
					<section
						className='w-full h-full flex flex-col justify-between p-3 '
						key={idx}>
						<h3>
							<strong>Name:</strong>&nbsp;{d.API}
						</h3>
						<p>
							<strong>Description:</strong>&nbsp;{d.Description}
						</p>
						<a
							className='text-blue-700 hover:underline'
							href={d.Link}
							rel='noreferrer'
							target='_blank'>
							{d.Link}
						</a>
					</section>
				</section>
			))}
		</div>
	);
}
