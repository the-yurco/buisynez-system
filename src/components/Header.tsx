import React from 'react';
import logo from '../assets/header.png';

const Header: React.FC = () => {
	return (
		<header id="header">
			<img src={logo} alt="Logo showing a money bag" />
			<h1>Investment Calculator</h1>
		</header>
	);
};

export default Header;
