import React from 'react';
import IMG_HEADER from '../assets/header.png';

type Props = {};

const Header = (props: Props) => {
	return (
		<header id="header">
			<img src={IMG_HEADER} alt="Logo showing header image" />
			<h1>Investment Calculator</h1>
		</header>
	);
};

export default Header;
