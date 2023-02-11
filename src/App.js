import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './RequireAuth/RequireAuth';
import Shipping from './components/Shipping/Shipping';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [{
        path: "/",
        loader: () => fetch('products.json'),
        element: <Shop />
      },
      {
        path: "order",
        loader: productsAndCartLoader,
        //loader: () => {
        // return fetch('products.json')}
        element: <Orders />

      },
      {
        path: "inventory",
        element: <RequireAuth><Inventory /></RequireAuth>
      },
      {
        path: "shipping",
        element: <RequireAuth><Shipping /></RequireAuth>
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      }
      ]
    },
  ])
  return (

    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
