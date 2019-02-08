import React from 'react';
import { render, hydrate } from 'react-dom';

import App from '../pages/containers/app';

import { BrowserRouter } from 'react-router-dom';

const homeContainer = document.getElementById('home-container')

//render(
hydrate(
	<BrowserRouter
		basename="/">
	  <App />
	</BrowserRouter>
, homeContainer);

