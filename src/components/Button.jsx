import Link from 'next/link';
import React from 'react';

/**
 *
 * @param {chilren:string} ,
 * @param { size:string }
 * @param { path:string}
 * @returns
 */
export default function Button({ children, size, path }) {
	//change size based on the type, s/m/l
	const s = 'px-py-1 rounded-sm border-2 border-slate-700 px-1 py-1.5 text-lg';
	return (
		<button type="button" className={s}>
			<Link href={path}>{children}</Link>
		</button>
	);
}
