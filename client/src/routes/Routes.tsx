import { createBrowserRouter } from "react-router-dom";

import App from "../layaut/App";
import HomePage from "../feactures/home/HomePage";
import Catalog from "../feactures/catalog/Catalog";
import ProductDetails from "../feactures/catalog/ProductDetails";
import AboutPage from "../feactures/about/AboutPage";
import ContactPage from "../feactures/contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/catalog/:id", element: <ProductDetails /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      
    ],
  },
]);
