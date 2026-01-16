import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Topics from "./pages/Topics";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path:"/Home",
      element:<><Navbar /><Home /></>
    }, {
      path:"/About",
      element:<><Navbar /><About /></>
    }, {
      path:"/Contact",
      element:<><Navbar /><Contact /></>
    }, {
      path:"/Topics",
      element:<><Navbar /><Topics /></>
    }

  ])
  return (
    <>
      <RouterProvider router={router} />
      <Main name={"Dilip Rai"} post={"Web Developer"} />
      <Footer />
    </>
  );
}

export default App;
