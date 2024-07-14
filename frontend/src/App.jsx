import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MainLayout from "./MainLayout/MainLayout";
import Shop from "./components/Shop/Shop";
import Post from "./components/Post/Post";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/post" element={<Post />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
