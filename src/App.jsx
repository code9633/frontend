import "./App.css";
import Main from "./Layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Components/ProductComponents/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element : <Home />,
        errorElement : <Error />
      },
      {
        index: true, 
        path : "/products",
        element : <Products />,
        errorElement : <Error />
      },
      {
        index: true,
        path : "/products/:id",
        element : <ProductDetails />,
        errorElement : < Error />
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
