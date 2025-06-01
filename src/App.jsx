import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/main-layout"
import LoginPage from "./pages/login-page"
import RegisterPage from "./pages/register-page"
import DashboardPage from "./pages/dashboard"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="dashboard" element={<DashboardPage/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App