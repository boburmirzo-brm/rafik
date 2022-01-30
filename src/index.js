import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer,{initialState} from './context/reducer/reducer'
import {StateProvider} from './context/stateprovider/StateProvider'
import Loader from "./components/loader/Loader"
import { BrowserRouter } from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={ <Loader/> }>
      <BrowserRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
