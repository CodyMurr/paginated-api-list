import ApiContext from '../context/ApiContext';
import { useContext } from 'react';

export default function Data() {
	const { currentData, loading } = useContext(ApiContext);
	if (loading) {
		return <h2>Loading...</h2>;
	}
	return (
		<div className='w-full h-96 p-1 flex flex-wrap justify-evenly items-center'>
			{currentData.map((d, idx) => (
				<section
					className={`flex flex-col justify-evenly p-3 w-1/6 h-40 border-solid border-2 border-neutral-focus rounded-lg`}
					key={`${d}-${idx}`}>
					<h3>
						<strong>Name:</strong>&nbsp;{d.API}
					</h3>
					<p>
						<strong>Description:</strong>&nbsp;{d.Description}
					</p>
					<p>
						<strong>Link:&nbsp;</strong>
						<a
							className='text-blue-700 hover:underline'
							href={d.Link}
							rel='noreferrer'
							target='_blank'>
							{d.API}
						</a>
					</p>
				</section>
			))}
		</div>
	);
}
