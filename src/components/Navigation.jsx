import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const stlyeClasses = {
	nav: 'flex justify-between m-2',
	ul: 'flex gap-3',
	li: 'rounded-lg hover:bg-slate-500',
	activeli: 'rounded-lg bg-slate-600 hover:bg-slate-500',
	link: 'h-full flex items-center px-2 py-1',
};

const Navigation = () => {
	return (
		<nav className={stlyeClasses.nav}>
			<ul className={stlyeClasses.ul}>
				<CustomLink to='/about'>About</CustomLink>
				<CustomLink to='/portfolio'>Portfolio</CustomLink>
				<CustomLink to='/contact'>Contact</CustomLink>
				<CustomLink to='/resume'>Résumé</CustomLink>
			</ul>
		</nav>
	);
};

export const CustomLink = ({ to, children, ...props }) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch( { path: resolvedPath.pathname, end: true });
	return (
		<li className={ isActive ? stlyeClasses.activeli : stlyeClasses.li }>
			<Link className={stlyeClasses.link} to={to} {...props}>
				{children}
			</Link>
		</li>
	);
};

export default Navigation;
