import Link from 'next/link';
import React from 'react';

/**
 *
 * @param {text:string} children,
 * @param { size:string } type
 * @returns
 */
export default function Button({ children, type, path }) {
	//change size based on the type, s/m/l
	return (
		<button type="button">
			<Link href={path}>{children}</Link>
		</button>
	);
}
