import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieAppProvider from './context/MovieContext';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
<React.StrictMode>
<MovieAppProvider>
      <App />
      </MovieAppProvider> 
</React.StrictMode>,
document.getElementById('root')
);

reportWebVitals();