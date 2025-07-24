import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';


const router = createBrowserRouter([
  {
    path: '/', // Home route
    element: <HomePage />,
  },  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
