import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter, Navigate,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AddProvider from "./pages/admin/addProvider";
import AdminLayout from "./layout/AdminLayout";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import ForgotPassword from "./pages/admin/auth/ForgotPassword";
// import HomePage from "./pages/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/admin/provider/add",
    element: <AddProvider/>
  },

  {
    path: '/admin/auth/login',
    element: <AdminLogin/>
  },

  {
    path: '/admin/auth/forgot-password',
    element: <ForgotPassword/>
  },

  {
    path: '/admin/dashboard',
    element: <AdminLayout />,
    children: [
      { element: <Navigate to="/" />, index: true },
      // { path: 'app', element: <DashboardAppPage /> },
      // { path: 'user', element: <UserPage /> },
      // { path: 'products', element: <ProductsPage /> },
      // { path: 'blog', element: <BlogPage /> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
