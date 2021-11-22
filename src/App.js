import React from 'react';
import { BrowserRouter as Router, Routes  ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import AwesomeMovies from './pages/awesomemovies';
import Home from './pages/home';
import Popularmovies from './pages/popularmovies';
import Developer from './pages/developer';
import Detail from './pages/detail';
import MovieAppProvider from './context/MovieContext';


function App() {
return (
	<>
	<div className='row d-flex mt-4 mb-4 justify-content-center'>
	<MovieAppProvider>
	<Router>
		<Navbar />
		<Routes>
			<Route path='/awesomemovies' element={<AwesomeMovies />} />
			<Route path='/home' element={<Home />}/>
			<Route path='/popularmovies' element={<Popularmovies />} />
			<Route path='/developer' element={<Developer />} />
			<Route path="/:id" element={<Detail />} />
			
			
			
		</Routes>
	</Router>
	</MovieAppProvider>
	</div>
   </>      
);
}

export default App;
