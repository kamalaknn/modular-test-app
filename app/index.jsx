import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import { sayHello } from '@tiger/hello';
import { App } from './App';
import './style.css';

sayHello();

ReactDOM.render(
    <App />,
    document.getElementById('app-root')
);