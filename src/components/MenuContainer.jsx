import Link from 'next/link';
import React from 'react';

const headerItems = [
	['Learn', '/learn'],
	['Hangout', '/hangout'],
];

const footerItems = [
	['About', '/about'],
	['Contact', '/contact'],
];

export default function MenuContainer({ itemType }) {
	return (
		<ul
			className={`relative mb-2 flex h-[30rem] bg-gray-50 p-4 md:mt-0 md:h-fit  md:flex-row md:justify-between md:border-0  md:text-sm md:font-medium ${
				itemType === 'footer' ? 'flex-row' : 'flex-col'
			}`}
		>
			{itemType === 'header'
				? headerItems.map(([title, path]) => (
						<li key={title} className="mx-2first:ml-0 m">
							<Link
								href={path}
								className="
								md:p-00
								hover:navHover
								active:before:H-2
								my-1
								inline-block w-full rounded-sm border-2
								border-gray-400
								p-4
								text-xl
								font-semibold
								text-slate-800
								opacity-90
								  before:absolute
						 before:top-[3.2rem] before:h-2 before:rounded-sm before:bg-secondary md:bg-transparent 
						md:pl-3
						 md:pr-4 md:hover:before:w-4"
								aria-current="page"
							>
								{title}
							</Link>
						</li>
				  ))
				: footerItems.map(([title, path]) => (
						<li key={title}>
							<Link
								href={path}
								className="md:p-00 hover:navHover  
								navText 
							
								inline-block
						 pl-3 pr-4 text-2xl
						 text-slate-800
						 md:bg-transparent"
								aria-current="page"
							>
								{title}
							</Link>
						</li>
				  ))}
		</ul>
	);
}
