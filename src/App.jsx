import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./components/pages/HomePage";
import NamedReactionsPage from "./components/pages/NamedReactionsPage";
import ProtectionGroupsPage from "./components/pages/ProtectionGroupsPage";
import PurificationReactionsPage from "./components/pages/PurificationReactionsPage";
import CommonReagentsPage from "./components/pages/CommonReagentsPage";
import CommonReactionsPage from "./components/pages/CommonReactionsPage";
import DonatePage from './components/pages/DonatePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="NamedReactionsPage" element={<NamedReactionsPage />} />
        <Route path="ProtectionGroupsPage" element={<ProtectionGroupsPage />} />
        <Route path="PurificationReactionsPage" element={<PurificationReactionsPage />} />
        <Route path="CommonReagentsPage" element={<CommonReagentsPage />} />
        <Route path="CommonReactionsPage" element={<CommonReactionsPage />} />
        <Route path="DonatePage" element={<DonatePage />} />
      </Route>
    </Routes>
  );
}

export default App;
