import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NamedReactionsPage from './pages/NamedReactionsPage';
import ProtectionGroupsPage from './pages/ProtectionGroupsPage';
import PurificationReactionsPage from './pages/PurificationReactionsPage';
import CommonReagentsPage from './pages/CommonReagentsPage';
import CommonReactionsPage from './pages/CommonReactionsPage';
import DonatePage from './pages/DonatePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'named-reactions',
        element: <NamedReactionsPage />,
      },
      {
        path: 'protection-groups',
        element: <ProtectionGroupsPage />,
      },
      {
        path: 'purification-reactions',
        element: <PurificationReactionsPage />,
      },
      {
        path: 'common-reagents',
        element: <CommonReagentsPage />,
      },
      {
        path: 'common-reactions',
        element: <CommonReactionsPage />,
      },
      {
        path: 'donate',
        element: <DonatePage />,
      },
    ],
  },
]);

export default router;