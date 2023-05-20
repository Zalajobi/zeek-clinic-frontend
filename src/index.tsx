import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AddProvider from "./pages/admin/addProvider";
// import AdminLayout from "./layout/AdminLayout";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import ForgotPassword from "./pages/admin/auth/ForgotPassword";
import ChangePassword from "./pages/admin/auth/ChangePassword";
import AdminSignup from "./pages/admin/auth/AdminSignup";
import CreateNewUser from "./pages/superadmin/CreateNewUser";
import SuperadminLogin from "./pages/superadmin/auth/SuperadminLogin";
import SuperadminDashboard from "./pages/superadmin";
import CareGiverDashboard from "./pages/provider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: '/admin',
    children: [
      {
        path: '/admin/login',
        element: <AdminLogin/>
      },

      {
        path: '/admin/signup',
        element: <AdminSignup/>
      },

      {
        path: '/admin/forgot-password',
        element: <ForgotPassword/>
      },

      {
        path: '/admin/change-password',
        element: <ChangePassword/>
      },
      {
        path: '/admin/provider/new',
        element: <AddProvider/>
      },
    ]
  },

  {
    path: '/superadmin',
    children: [
      {
        path: '/superadmin/',
        element: <SuperadminDashboard/>
      },
      {
        path: '/superadmin/create/new_admin',
        element: <CreateNewUser/>
      },
      {
        path: '/superadmin/login',
        element: <SuperadminLogin/>
      }
    ]
  },

  {
    path: '/care',
    children: [
      // {
      //   path: '/care/login',
      //   element: <AdminLogin/>
      // },

      {
        path: '/care',
        element: <CareGiverDashboard/>
      },

      {
        path: '/care/signup',
        element: <AdminSignup/>
      },

      {
        path: '/care/forgot-password',
        element: <ForgotPassword/>
      },

      {
        path: '/care/change-password',
        element: <ChangePassword/>
      },
    ]
  },

  //   element: <AdminLayout />,
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
