/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import registerServiceWorker from './registerServiceWorker';

//var destination = document.querySelector("#container");

ReactDOM.render(<TodoList />,document.querySelector("#container"));
registerServiceWorker();