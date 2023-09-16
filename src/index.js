import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
// import  ReactDOM  from 'react-dom';
// import reportWebVitals from './reportWebVitals'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

root.render(<BrowserRouter>
  <App/>
 </BrowserRouter>);
//  reportWebVitals();