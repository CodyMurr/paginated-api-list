import { useState, useContext } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import ApiContext from '../context/ApiContext';

const styles = {
	base: [
		'container',

		'w-1/12',

		'border-solid',
		'border-4',
		'rounded',
		'flex',
		'flex-col',
	],
	active: ['border-secondary-focus'],
	inactive: ['border-secondary'],
};

export default function Dropdown(props) {
	const { changePgSize } = useContext(ApiContext);
	const [showOpts, setShowOpts] = useState(false);

	function handleClick(e) {
		e.preventDefault();
		changePgSize(e.target.id);
		setShowOpts(false);
	}
	return (
		<span
			className={`${
				!!showOpts ? styles.active : styles.inactive
			} ${styles.base.join(' ')}`}>
			{!!showOpts ? (
				<>
					<p className='flex w-full p-1 justify-between'>
						{props.message}:{' '}
						<FaAngleDown
							size={20}
							onClick={() => setShowOpts(false)}
						/>
					</p>
					{props.options.map((op) => (
						<p id={op} key={op} onClick={handleClick}>
							{op}
						</p>
					))}
				</>
			) : (
				<p className='flex justify-between p-1 items-center w-full h-full'>
					{props.message}: {props.default}{' '}
					<FaAngleRight size={20} onClick={() => setShowOpts(true)} />
				</p>
			)}
		</span>
	);
}
