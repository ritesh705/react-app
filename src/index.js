import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

const myelement =
(
    <div>
        <h1>Work In Progress | Keep Visiting</h1>
        <footer>Developed By - Ritesh Kumar</footer>
    </div>
);
ReactDOM.render(myelement, document.getElementById('mycontent'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();