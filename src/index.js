import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/aggregrator.scss'

const root = document.getElementById('root');

// If the DOM has child nodes, hydrate into an html string.
// React-Snap uses this to pre-render pages instead of using JS
// to hydrate the pages in the browser.
root.hasChildNodes() ?
  ReactDOM.hydrate(<App />, root) :
  ReactDOM.render(<App/>, root);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
