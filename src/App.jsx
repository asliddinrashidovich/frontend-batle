import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/main-layout";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import DashboardPage from "./pages/dashboard";
import Profile from "./pages/profile";
import NotFoundPage from "./pages/not-found-page";
import ProtectedRoute from "./components/authComponents/protected/protected-route";
import PublicOnlyRoute from "./components/authComponents/protected/public-only";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PublicOnlyRoute><LoginPage /></PublicOnlyRoute>} />
        <Route path="register" element={ <PublicOnlyRoute><RegisterPage /></PublicOnlyRoute>}/>
        <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
