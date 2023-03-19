import Link from 'next/link';
import React from 'react';

const menuItems = [
	['Learn', '/learn'],
	['Hangout', '/hangout'],
];

export default function menuContainer() {
	return (
		<ul className="flex space-x-4 sm:justify-center">
			{menuItems.map(([title, url]) => (
				<>
					<li>
						<Link href={url}>{title}</Link>
					</li>
				</>
			))}
		</ul>
	);
}
