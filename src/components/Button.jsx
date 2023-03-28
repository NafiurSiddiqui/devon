import Link from 'next/link';
import React from 'react';

/**
 *
 * @param {chilren:string} ,
 * @param { size:string }
 * @param { path:string}
 * @returns
 */
export default function Button({ children, type, path, singleBtn }) {
	const fill = `h-11 ${
		singleBtn ? '8rem' : 'w-full'
	} min-w-[8rem] rounded border-[3px] border-slate-500 bg-slate-600 text-white font-semibold text-sm  text-slate-600 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white  tablet-md:text-sm   tablet-md:rounded android-md/2:w-[12rem]`;

	const noFillDark = `h-11 ${
		singleBtn ? '8rem' : 'w-full'
	} min-w-[8rem]   text-sm rounded-sm border-2 border-slate-400 font-semibold text-slate-300 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white   tablet-md:text-sm  tablet-md:rounded android-md/2:w-[12rem]`;

	const noFill = `h-11 ${
		singleBtn ? '8rem' : 'w-full'
	} min-w-[8rem]   text-sm rounded-sm border-2 border-slate-500 font-semibold text-slate-600 hover:border-0 hover:border-none hover:border-transparent hover:bg-slate-700 hover:text-white   tablet-md:text-sm  tablet-md:rounded android-md/2:w-[12rem]`;

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
