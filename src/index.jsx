import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

const jsx = 
	<div className='container'>
		<h1>React</h1>
		<p>Библиотека для UI</p>	
	</div>;	

ReactDOM.render(jsx, document.getElementById('app'));