import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import MenuContainer from '../MenuContainer';

export default function Navbar() {
	return (
		<nav className=" border border-slate-800 px-2 py-2">
			<div
				className={`container-full flex flex-wrap items-center justify-between`}
			>
				<Link href="/" className={`flex items-center `}>
					<span className="self-center whitespace-nowrap text-xl font-semibold text-slate-900">
						Devon
					</span>
				</Link>

				<div className="flex  items-center justify-between  md:w-80">
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<MenuContainer itemType={'header'} />
					</div>
					<Button type={'no-fill'} path={'/login'}>
						Login
					</Button>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden "
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-6 w-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
}
