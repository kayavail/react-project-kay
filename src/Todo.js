import React, { Component } from 'react';
import ReactDom from 'react-dom';

import logo from './logo.svg';

function Todo (){
return(
<div>
	<h1>My Project</h1>
	<ol>
	<li>Eat some food</li>
	<li>Go to class</li>
	<li>Go to work</li>
	<li>Go home and rest</li>
</ol>
</div>
)

}


ReactDom.render(<Todo/>,  document.getElementById('root'))

export default Todo
