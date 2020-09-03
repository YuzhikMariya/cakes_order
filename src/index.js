import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


let rerender = () => {
  let state = store.getState();
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
      </Provider>
    </BrowserRouter>, document.getElementById('root')
  );
}

rerender();

store.subscribe(() => {
  rerender();
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
