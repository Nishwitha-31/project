import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import SPONSORPage from './pages/SPONSOR';

const router = createBrowserRouter([
  {
    path: '/', // Home route
    element: <HomePage />,
  },
  {
    path: '/register', 
    element: <RegisterPage />,
  },
  {
    path: '/sponsor',
    element: <SPONSORPage />,
  }
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
