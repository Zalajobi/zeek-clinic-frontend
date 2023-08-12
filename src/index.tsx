import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AddProvider from './pages/admin/addProvider';
import AdminLogin from './pages/admin/auth/AdminLogin';
import ForgotPassword from './pages/admin/auth/ForgotPassword';
import ChangePassword from './pages/admin/auth/ChangePassword';
import AdminSignup from './pages/admin/auth/AdminSignup';
import CreateNewUser from './pages/superadmin/CreateNewUser';
import SuperadminLogin from './pages/superadmin/auth/SuperadminLogin';
import SuperadminDashboard from './pages/superadmin';
import CareGiverDashboard from './pages/provider';
import HospitalOrganizations from './pages/superadmin/HospitalOrganizations';
import OrganizationSite from './pages/superadmin/OrganizationSite';
import AdminDashboard from './pages/admin';
import AdminProvider from './pages/admin/AdminProvider';
import AdminSiteInformation from './pages/admin/AdminSiteInformation';
import AdminPatient from './pages/admin/auth/AdminPatient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/admin',
    children: [
      {
        path: '/admin',
        element: <AdminDashboard />,
      },
      {
        path: '/admin/login',
        element: <AdminLogin />,
      },

      {
        path: '/admin/signup',
        element: <AdminSignup />,
      },

      {
        path: '/admin/forgot-password',
        element: <ForgotPassword />,
      },

      {
        path: '/admin/providers',
        element: <AdminProvider />,
      },

      {
        path: '/admin/patients',
        element: <AdminPatient />,
      },

      {
        path: '/admin/site/details/:siteId',
        element: <AdminSiteInformation />,
      },

      {
        path: '/admin/change-password',
        element: <ChangePassword />,
      },

      {
        path: '/admin/provider/new/:siteId',
        element: <AddProvider />,
      },
    ],
  },

  {
    path: '/superadmin',
    children: [
      {
        path: '/superadmin/',
        element: <SuperadminDashboard />,
      },

      {
        path: '/superadmin/organisations',
        element: <HospitalOrganizations />,
      },

      {
        path: '/superadmin/create/new_admin/:siteId',
        element: <CreateNewUser />,
      },

      {
        path: '/superadmin/login',
        element: <SuperadminLogin />,
      },

      {
        path: '/superadmin/hospital/:hospitalId',
        element: <OrganizationSite />,
      },
    ],
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
        element: <CareGiverDashboard />,
      },

      {
        path: '/care/signup',
        element: <AdminSignup />,
      },

      {
        path: '/care/forgot-password',
        element: <ForgotPassword />,
      },

      {
        path: '/care/change-password',
        element: <ChangePassword />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
