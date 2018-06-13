import React from 'react';
import ReactDOM from 'react-dom';

import './components/example/styles.scss';

const jsx = 
	<div className='container'>
		<h1>React</h1>
		<p>Библиотека для UI</p>	
	</div>;	

ReactDOM.render(jsx, document.getElementById('app'));