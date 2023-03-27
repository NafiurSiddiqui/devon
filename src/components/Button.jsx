import Link from 'next/link';
import React from 'react';

/**
 *
 * @param {chilren:string} ,
 * @param { size:string }
 * @param { path:string}
 * @returns
 */
export default function Button({ children, type, path }) {
	//change size based on the type, s/m/l
	const s =
		'px-py-1 rounded-sm border-2 border-slate-700 px-2 py-1 font-semibold  ';

	const fill =
		'h-10 w-36 rounded border-2 border-slate-600 bg-slate-600 text-white font-semibold text-sm  text-slate-600 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white ';

	const noFillDark =
		'h-10 w-36 text-sm rounded border-2 border-slate-500 font-semibold text-slate-300 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white ';

	const noFill =
		'h-10  w-36 text-sm rounded border-2 border-slate-500 font-semibold text-slate-600 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white ';

	return (
		<button
			type="button"
			className={
				type === 'fill' ? fill : type === 'no-fill-dark' ? noFillDark : noFill
			}
		>
			<Link href={path}>{children}</Link>
		</button>
	);
}
