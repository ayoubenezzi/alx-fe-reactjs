import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import Layout from './Layout';
import About from './About';
import Contact from './components/Contact';
import Services from './Services';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='services' element={<Services />} />
    <Route path='' element={<Home />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
