import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Home from './pages/container/home';
import data from './api.json'
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home data={data}/>, document.getElementById('home-container'));

