import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/main-layout"
import LoginPage from "./pages/login-page"
import RegisterPage from "./pages/register-page"
import DashboardPage from "./pages/dashboard"
import Profile from "./pages/profile"
// import PropTypes from "prop-types"
// import NotFoundPage from "./pages/not-found-page"

// App.propTypes  = {
//   children: PropTypes.node.isRequired
// }


function App() {
  // const isAuthenticated = localStorage.getItem('token');

  // function ProtectedRoute({ children}) {
  //   if(isAuthenticated) {
  //     return children
  //   } else {
  //     return <NotFoundPage/>
  //   }
  // }
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="dashboard" element={<DashboardPage/>}>
          <Route index element={<Profile/>}/>
        </Route>
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