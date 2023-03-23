import React from 'react';
import MenuContainer from '../MenuContainer';

export default function Footer() {
	return (
		<footer className="borderTest absolute bottom-0 z-10 flex h-28 w-full justify-between px-2 py-6">
			<p>
				©️copyright <span className="font-semibold">Devon</span>
			</p>
			<nav className=" bg-transparent">
				<MenuContainer itemType={'footer'} />
			</nav>
		</footer>
	);
}
