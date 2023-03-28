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
			className={`relative mb-2 flex  bg-gray-50 tablet-md:mt-0 tablet-md:h-fit  tablet-md:flex-row tablet-md:justify-between tablet-md:border-0  tablet-md:p-0 tablet-md:text-sm
			tablet-md:font-medium
			${itemType === 'footer' ? 'flex-row' : 'h-[30rem] flex-col  p-4 '}`}
		>
			{itemType === 'header'
				? headerItems.map(([title, path]) => (
						<li key={title} className="m mx-2 first:ml-0">
							<Link
								href={path}
								className="
								hover:navHover
								active:before:H-2
								my-1
								inline-block
								w-full rounded-sm border-2 border-stone-700
								p-4
								text-xl
								font-semibold
								text-stone-500
								
								before:absolute
								before:top-[2rem]
								  before:h-2
						 before:rounded-sm before:bg-secondary tablet-md:border-0 tablet-md:bg-transparent tablet-md:p-0 
						tablet-md:pl-3
						 tablet-md:pr-4
						 tablet-md:text-lg 
						 tablet-md:hover:before:w-4"
								aria-current="page"
							>
								{title}
							</Link>
						</li>
				  ))
				: footerItems.map(([title, path]) => (
						<li key={title} className="m mx-1 first:ml-0">
							<Link
								href={path}
								className="
								hover:navHover 
								navText inline-block  
								pl-3 
							
								pr-4
						 text-2xl text-slate-800 tablet-md:bg-transparent
						 
						 "
								aria-current="page"
							>
								{title}
							</Link>
						</li>
				  ))}
		</ul>
	);
}
