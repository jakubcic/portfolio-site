import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const styleClasses = {
	header: 'container min-w-full flex justify-between box-border items-center gap-8 h-16 px-4 bg-zinc-700 text-white text-lg',
	title: 'text-base sm:text-2xl justify-start'
};

const Header = () => {
	return (
		<div className={styleClasses.header}>
			<Link to='/' className={styleClasses.title}>Jakub Paweł Cichon</Link>
			<Navigation />
		</div>
	);
};

export default Header;
