import React from 'react';
import Home from '../../pages/home';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './Header';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
			<div className="Navlogo">
        <NavLink to='/awesomemovies' activeStyle >
			Awesome Movies
		</NavLink>
		</div>
		<NavLink to='/home' activeStyle >
			Home
		</NavLink>
		
		<NavLink to='/popularmovies' activeStyle>
			Popular Movies
		</NavLink>
		<NavLink to='/developer' activeStyle>
			About developer
		</NavLink>
		
		</NavMenu>
		
	</Nav>
	
	</>
);
};

export default Navbar;
