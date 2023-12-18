import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import AdminLandingPage from './AdminLandingPage';
import AdminProductPage from './AdminProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLandingPage />,
  },
  {
    path: '/products/:id',
    element: <AdminProductPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
