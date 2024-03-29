import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/AboutMe/About';
import * as serviceWorker from './serviceWorker';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';



const Routing=(
<Router> 
    <div>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
    </div>
</Router>
);


ReactDOM.render(Routing, document.getElementById('root'));

// ReactDOM.render(<App/>, document.getElementById('root'));
const myelement =
(
    <div style={{textAlign:"right"}}>
        <footer>Developed By - Ritesh Kumar</footer>
    </div>
);
ReactDOM.render(myelement, document.getElementById('mycontent'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
