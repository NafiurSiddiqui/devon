import React from 'react';
import MenuContainer from '../MenuContainer';

export default function Footer() {
	return (
		<footer className="borderTest absolute bottom-0 flex w-full justify-between p-2">
			<div>copyright©️ Devon</div>
			<nav className="borderTest bg-transparent">
				<MenuContainer itemType={'footer'} />
			</nav>
		</footer>
	);
}
