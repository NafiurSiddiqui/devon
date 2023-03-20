import Link from 'next/link';
import React from 'react';

const menuItems = [
	['Learn', '/learn'],
	['Hangout', '/hangout'],
];

export default function MenuContainer() {
	return (
		<ul className=" mt-4 flex flex-col justify-between rounded-lg border border-gray-100 bg-gray-50 p-2 md:mt-0  md:flex-row md:border-0 md:bg-white md:text-sm md:font-medium">
			{menuItems.map(([title, path]) => (
				<li key={title} className="mx-2first:ml-0">
					<Link
						href={path}
						className="md:p-00 inline-block rounded py-2  
						 pl-3 pr-4 text-slate-800 before:absolute before:top-[3.2rem] before:h-2
						 before:rounded-sm 
						 before:bg-secondary
						 hover:font-bold hover:before:w-4 md:bg-transparent"
						aria-current="page"
					>
						{title}
					</Link>
				</li>
			))}
		</ul>
	);
}
