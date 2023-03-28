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
	const fill =
		'h-10 w-36 rounded border-[3px] border-slate-500 bg-slate-600 text-white font-semibold text-sm  text-slate-600 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white tablet-md:w-56 tablet-md:text-lg tablet-md:h-12 tablet-md:h-[3.2rem] tablet-md:rounded';

	const noFillDark =
		'h-10 w-36 text-sm rounded-sm border-2 border-slate-400 font-semibold text-slate-300 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white tablet-md:w-56 tablet-md:h-12 tablet-md:text-lg tablet-md:h-[3.2rem] tablet-md:rounded';

	const noFill =
		'h-10  w-36 text-sm rounded-sm border-2 border-slate-500 font-semibold text-slate-600 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white tablet-md:w-56 tablet-md:h-12 tablet-md:text-lg tablet-md:h-[3.2rem] tablet-md:rounded';

	return (
		<button
			type="button"
			className={[
				type === 'fill' ? fill : type === 'no-fill-dark' ? noFillDark : noFill,
			]}
		>
			<Link href={path}>{children}</Link>
		</button>
	);
}
