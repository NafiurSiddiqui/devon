import React from 'react';
import MenuContainer from '../MenuContainer';

export default function Footer() {
	return (
		<footer className="borderTest  z-10 flex h-28 w-full justify-between px-2 py-6">
			<p className="navText">
				©️copyright <span className="font-semibold">Devon</span>
			</p>
			<nav className="  bg-transparent">
				<MenuContainer itemType={'footer'} />
			</nav>
		</footer>
	);
}
