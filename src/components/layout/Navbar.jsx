import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../Button';
import MenuContainer from '../MenuContainer';

export default function Navbar() {
	const [MobileMenuToggle, setMobileMenuToggle] = useState(false);

	const mobileMenuHandler = () => {
		setMobileMenuToggle((prevState) => !prevState);
	};

	return (
		<nav className=" z-30 flex h-20 w-full items-center justify-between border border-slate-800 bg-slate-50 px-2 py-2 align-middle sm:top-0">
			<div
				className={`container-full flex w-full flex-wrap items-center justify-between`}
			>
				<Link href="/" className={`flex items-center `}>
					<span className="self-center whitespace-nowrap text-xl font-semibold italic text-slate-900">
						Devon
					</span>
				</Link>

				<div className="flex  items-center justify-between md:w-80">
					<div
						className={` absolute  left-0 z-20 w-full  transition-all duration-500 ease-in-out md:relative
						md:block md:w-auto ${MobileMenuToggle ? 'top-[4.8rem]' : '-top-full'}`}
						id="navbar-default"
					>
						<MenuContainer itemType={'header'} />
					</div>
					<Button type={'no-fill'} path={'/login'}>
						Login
					</Button>
					<button
						type="button"
						className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 md:hidden "
						aria-controls="navbar-default"
						aria-expanded="false"
						onClick={() => mobileMenuHandler()}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className={`${
								!MobileMenuToggle ? 'inline-block' : 'hidden'
							} h-6 w-6`}
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
						<svg
							className={`${MobileMenuToggle ? 'inline-block' : 'hidden'}`}
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 16 16"
						>
							<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.8"
								d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
							/>
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
}

/**
 * -- For MenuBtn darkmode
 * dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
 *--- Add 'hidden' class to the parnet menuContainer to hide
 */
