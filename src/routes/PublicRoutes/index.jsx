import { PATHS } from "constants";
import Dashboard from "pages/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Dashboard />} />
      <Route path="*" element={<Navigate to={PATHS.HOME} replace />} />
    </Routes>
  );
};

export default PublicRoutes;
