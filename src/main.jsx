import {useState, useEffect} from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';
import Root from './components/routes/Root.jsx'
import Home from './components/pages/Home.jsx';
import Shopping from './components/pages/Shopping.jsx';
import Cart from './components/pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shopping",
        element: <Shopping />,
      },
      {
        path: "cart",
        element: <Cart />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
