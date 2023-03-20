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
			className={`flex justify-between  bg-gray-50   md:mt-0 md:flex-row md:border-0  md:text-sm md:font-medium ${
				itemType === 'footer' ? 'flex-row' : 'flex-col'
			}`}
		>
			{itemType === 'header'
				? headerItems.map(([title, path]) => (
						<li key={title} className="mx-2first:ml-0">
							<Link
								href={path}
								className="md:p-00 hover:navHover inline-block rounded  
						 py-2 pl-3 pr-4 text-slate-800 before:absolute before:top-[3.2rem]
						 before:h-2 
						 before:rounded-sm
						before:bg-secondary
						 hover:before:w-4 md:bg-transparent"
								aria-current="page"
							>
								{title}
							</Link>
						</li>
				  ))
				: footerItems.map(([title, path]) => (
						<li key={title} className="">
							<Link
								href={path}
								className="md:p-00 hover:navHover  
								navText 
								inline-block
						 py-2 pl-3 pr-4 
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
