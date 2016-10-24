import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';
import App from './components/App';

window.ee = new EventEmitter();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);