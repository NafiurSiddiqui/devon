import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import SidebarMenu from '../sidebar/Sidebar';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<SidebarMenu />
			<main>{children}</main>
			<Footer />
		</>
	);
}
