import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import MenuContainer from '../navmenu/menuContainer';

export default function Navbar() {
	return (
		// <nav className="border-slate-800 ">
		// 	<span className="navbar-logo">Devon</span>

		// 	<MenuContainer />
		// 	<Button size={'m'} path={'/login'}>
		// 		Log in
		// 	</Button>
		// </nav>

		// <nav class="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
		<nav class="border-slate-800">
			<div class="container mx-auto flex flex-wrap items-center justify-between">
				<Link href="/" class="flex items-center">
					{/* <img
						src="https://flowbite.com/docs/images/logo.svg"
						class="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/> */}
					<span class="self-center whitespace-nowrap text-xl font-semibold text-slate-900">
						Devon
					</span>
				</Link>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>

				{/* <MenuContainer /> */}
				{/* <div class="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
						<li>
							<Link
								href={'/'}
								class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-slate-600 dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
								aria-current="page"
							>
								Something
							</Link>
						</li>
					</ul>
				</div> */}
			</div>
		</nav>
	);
}
