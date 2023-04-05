import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home";
import About from "./pages/about/about";
import Mission from "./pages/mission";
import Blog from "./pages/blog/blog";
import Layout from "./layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
      <Route path="mission" element={<Mission />} />
      <Route path="blog" element={<Blog />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
