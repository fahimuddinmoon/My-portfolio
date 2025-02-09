import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import Layout2 from './Layout2';
import Layout3 from './Layout3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/project1",
    element: <Layout></Layout>,
  },
  {
    path: "/project2",
    element: <Layout2></Layout2>,
  },
  {
    path: "/project3",
    element: <Layout3></Layout3>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
