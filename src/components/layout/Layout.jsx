import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import SidebarMenu from '../Sidebar/Sidebar';

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
