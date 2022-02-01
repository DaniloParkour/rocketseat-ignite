// configure on babel.config to not need more import react all jsx
// import React from 'react'; //Understand html tags or components on .js

import {render} from 'react-dom';
import App from './App'; //Not need put ".jsx" becouse "resolver" from webpack.config.js

//Put content on element of id='root' defined on index.html
render(<App />, document.getElementById('root'));
