import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`

background:#fabb00;
padding: 0;
margin: 0 auto;
display: column;
overflow: hidden;
position: fixed;
  top: 0;
  width: 100%;
// width: 2000px;
font-size: 16px;
font-weight: bold;
height: 80px;
display: flex;
textalign:center;
justify-content: space-between;
// padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
Third Nav 
 justify-content: flex-start; 
`;

export const NavLink = styled(Link)`
position: abosolute;
color: #fff;
display: flex;

align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #fff;
}
`;

 export const Bars = styled(FaBars)`
 position: abosolute;
display: none;

color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`

display: flex;
position: abosolute;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	 display: none;
	
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
