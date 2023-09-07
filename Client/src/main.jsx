import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001';

// production url default
axios.defaults.baseURL = 'https://doggygo-production.up.railway.app';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			{/* <HashRouter> */}
			<App />
			{/* </HashRouter> */}
		</BrowserRouter>
	</Provider>
);
