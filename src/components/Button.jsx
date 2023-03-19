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
	const s =
		'px-py-1 rounded-sm border-2 border-slate-700 px-2 py-1 font-semibold  ';
	return (
		<button
			type="button"
			className={
				'w-36 rounded-sm border-2 border-slate-500 px-6 py-2 font-semibold text-slate-600 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white '
			}
		>
			<Link href={path}>{children}</Link>
		</button>
	);
}
