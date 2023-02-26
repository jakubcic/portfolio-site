import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const styleClasses = {
	header: 'flex justify-between box-border items-center gap-8 px-4 bg-slate-700 text-white text-lg',
	title: 'text-3xl justify-start'
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
