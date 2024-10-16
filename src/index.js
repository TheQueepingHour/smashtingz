import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Navigate from './components/Navigate'
import Splash from './components/Splash';
import E404 from './components/E404';

const router = createBrowserRouter([
  {
    element: <Navigate />,
    children: [
      {
        path: '/',
        element: <Splash />
      },
      {
        path: '*',
        element: <E404 />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
