import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Topics from "./pages/Topics";
import ErrorPage from "./pages/ErrorPage"; // ✅ create this

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Layout wraps Navbar + Main + Footer
const Layout = () => (
  <>
    <Navbar />
    <Outlet />  
    <Main name={"Dilip Rai"} post={"Web Developer"} />
    <Footer />
    <div>We are venom form NAVY</div>
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />, // ✅ handles routing errors
      children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Contact", element: <Contact /> },
        { path: "Topics", element: <Topics /> },
        { path: "*", element: <ErrorPage /> }, // ✅ catch-all
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
