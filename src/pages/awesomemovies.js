import React from 'react';
import {Link} from 'react-router-dom'

const AwesomeMovies = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '60vh'
	}}
	>
		<div className="bodyelements">
	<h1>Welcome to Awesome Movies</h1>
    <Link to='/home'><button>Browse Movies</button></Link>
	</div>

	</div>
);
};

export default AwesomeMovies;