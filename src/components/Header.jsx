const headerStyles = {
	header: [
		'h-12',
		'w-full',
		'flex',
		'justify-center',
		'items-center',
		'bg-neutral',
	],
	nav: ['w-3/5', 'flex', 'flex-row', 'justify-center'],
	p: {
		base: ['text-xl', 'text-center', 'w-1/2', 'cursor-pointer'],
		active: ['text-primary'],
		inactive: ['text-base-300'],
	},
};

export default function Header({ content, setContent }) {
	return (
		<div className={headerStyles.header.join(' ')}>
			<nav className={headerStyles.nav.join(' ')}>
				<p
					className={`${
						content === 'api'
							? headerStyles.p.active.join(' ')
							: headerStyles.p.inactive.join(' ')
					} ${headerStyles.p.base.join(' ')}`}
					onClick={() => setContent('api')}>
					All Apis
				</p>
				<p
					className={`${
						content === 'category'
							? headerStyles.p.active.join(' ')
							: headerStyles.p.inactive.join(' ')
					} ${headerStyles.p.base.join(' ')}`}
					onClick={() => setContent('category')}>
					Categories
				</p>
			</nav>
		</div>
	);
}
