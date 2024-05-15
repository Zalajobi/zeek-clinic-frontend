import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AddProvider from '@pages/admin/addProvider';
import AdminLogin from '@pages/admin/auth/AdminLogin';
import ForgotPassword from '@pages/admin/auth/ForgotPassword';
import ChangePassword from '@pages/admin/auth/ChangePassword';
import AdminSignup from '@pages/admin/auth/AdminSignup';
import CreateNewUser from '@pages/superadmin/CreateNewUser';
import SuperadminLogin from '@pages/superadmin/auth/SuperadminLogin';
import SuperadminDashboard from '@pages/superadmin';
import CareGiverDashboard from '@pages/provider';
import HospitalOrganizations from '@pages/superadmin/HospitalOrganizations';
import OrganizationSite from '@pages/superadmin/OrganizationSite';
import AdminDashboard from '@pages/admin';
import AdminProvider from '@pages/admin/AdminProvider';
import AdminSiteInformation from '@pages/admin/AdminSiteInformation';
import AdminPatient from '@pages/admin/AdminPatient';
import AdminProfile from '@pages/admin/AdminProfile';
import AdminProviderDetails from '@pages/admin/AdminProviderDetails';
import QueryClientProviderWrapper from '@lib/api';
import AdminDepartmentsPage from '@pages/admin/AdminDepartmentsPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import AdminUnitsPage from '@pages/admin/AdminUnitsPage';
import AdminServiceAreaPage from '@pages/admin/AdminServiceAreaPage';
import AdminRolesPage from '@pages/admin/AdminRolesPage';
import SiteDetailsPage from '@pages/superadmin/SiteDetailsPage';
import SiteProvidersPage from '@pages/SiteProcidersPage';

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
        path: '/admin/profile/:id',
        element: <AdminProfile />,
      },

      {
        path: '/admin/provider/details/:id',
        element: <AdminProviderDetails />,
      },

      {
        path: '/admin/providers/:siteId',
        element: <AdminProvider />,
      },

      {
        path: '/admin/patients/:siteId',
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

      {
        path: '/admin/departments/:siteId',
        element: <AdminDepartmentsPage />,
      },

      {
        path: '/admin/roles/:siteId',
        element: <AdminRolesPage />,
      },

      {
        path: '/admin/units/:siteId',
        element: <AdminUnitsPage />,
      },

      {
        path: '/admin/service-area/:siteId',
        element: <AdminServiceAreaPage />,
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

      // SuperAdmin Login
      {
        path: '/superadmin/login',
        element: <SuperadminLogin />,
      },

      // Hospital Details
      {
        path: '/superadmin/hospital/:hospitalId',
        element: <OrganizationSite />,
      },

      // SiteDetailsPage Details
      {
        path: '/superadmin/site/:siteId',
        element: <SiteDetailsPage />,
      },

      // Super Admin Site Providers
      {
        path: '/superadmin/site/provider/:siteId',
        element: <SiteProvidersPage />,
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
    <QueryClientProviderWrapper>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProviderWrapper>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
