import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/blogs",
    element: <BlogPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
