import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import SidebarMenu from '../sidebar/Sidebar';

export default function Layout({ children, sidebarOpen }) {
	return (
		<>
			<main>
				<Navbar />
				<SidebarMenu open={sidebarOpen} />
				{children}
				<Footer />
			</main>
		</>
	);
}
