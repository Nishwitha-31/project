import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/', // Home route
    element: <HomePage />,
  },
  {
    path: '/register', 
    element: <RegisterPage />,
  }
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
