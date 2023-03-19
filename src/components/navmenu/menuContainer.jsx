import Link from 'next/link';
import React from 'react';

const menuItems = [
	['Learn', '/learn'],
	['Hangout', '/hangout'],
];

export default function MenuContainer() {
	return (
		// <ul className="flex space-x-4 sm:justify-center">
		// 	{menuItems.map(([title, url]) => (
		// 		<>
		// 			<li key={title}>
		// 				<Link href={url}>{title}</Link>
		// 			</li>
		// 		</>
		// 	))}
		// </ul>

		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
				{menuItems.map(([title, path]) => (
					<li key={title}>
						<Link
							href={path}
							class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-slate-600 dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
							aria-current="page"
						>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
