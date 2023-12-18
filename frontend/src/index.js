import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import AdminLandingPage from './AdminLandingPage';
import AdminProductPage from './AdminProductPage';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <Navigate to="/admin/products" replace />,
  },
  {
    path: '/admin/products',
    element: <AdminLandingPage />,
  },
  {
    path: '/admin/products/:id',
    element: <AdminProductPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
