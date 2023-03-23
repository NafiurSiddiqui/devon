import React from 'react';
import MenuContainer from '../MenuContainer';

export default function Footer() {
	return (
		<footer className="z-10 flex h-32 w-full justify-between p-2">
			<p>
				©️copyright <span className="font-semibold">Devon</span>
			</p>
			<nav className=" bg-transparent">
				<MenuContainer itemType={'footer'} />
			</nav>
		</footer>
	);
}
