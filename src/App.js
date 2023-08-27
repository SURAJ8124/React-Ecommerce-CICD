import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './pages/CartPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/signup",
      element: <SignUpPage/>,
    },
    {
      path: "/cart",
      element: <CartPage/>,
    },
  ]);
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/*  */}
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>

    </div>
  );
}

export default App;
