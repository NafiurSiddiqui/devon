import React from 'react';
import Theme from '../theme';

export default function SidebarMenu({ open }) {
	//You do not need this if you are using Nextra
	return (
		<aside className={`${open ? 'inline-block' : 'hidden'}`}>
			<ul>
				<li>Introduction</li>
			</ul>
			<Theme />
		</aside>
	);
}
