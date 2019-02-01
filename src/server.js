import express from 'express';

import React from 'react';
import App from '../dist/ssr/app';
import { StaticRouter } from 'react-router';
import reactDOMServer from 'react-dom/server';


const app = express();

app.use(express.static('dist'));
app.use('/images', express.static('images'));

app.get('*', (req, res) => {
	console.log(req.url);
	
	const html = reactDOMServer.renderToString (
		<StaticRouter
			location={req.url}
			context={{
				name: 'Jugo'
			}}
		>
			<App />
		</StaticRouter>
	)
	
				 /* <script src="http://localhost:9000/js/app.js"></script> */
	
	res.write(`
	  <!DOCTYPE html>
	  <html lang="en">
	  <head>
	    <meta charset="UTF-8">
	    <title>Platzi Video</title>
		<link rel="stylesheet" href="/css/app.css">
	  </head>
	  <body>
	    <div id="home-container">${html}</div>
	    <div id="modal-container"></div>

				<script src="/js/app.js"></script>
	  </body>
	  </html>
		`)
	res.end();
})


app.listen(3000, function(){
	console.log("Server is ready")
})

