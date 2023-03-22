import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import SidebarMenu from '../sidebar/Sidebar';

export default function Layout({ children, sidebarOpen }) {
	return (
		<>
			<main className="min-h-screen">
				<Navbar />
				<SidebarMenu open={sidebarOpen} />
				<main>{children}</main>
				<Footer />
			</main>
		</>
	);
}
