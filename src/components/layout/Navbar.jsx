import React from 'react';
import Button from '../Button';

export default function Navbar() {
	return (
		<nav>
			<span className="navbar-logo">Devon</span>
			<Button size={'m'} path={'/login'}>
				Log in
			</Button>
		</nav>
	);
}
