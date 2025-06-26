import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />, // This should load the landing page
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
