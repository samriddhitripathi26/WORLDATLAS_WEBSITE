import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";

// Layout
import { AppLayout } from "./components/Layout/AppLayout";
import { CountryDetails } from "./components/Layout/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,        // Header + Outlet + Footer
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",             // same as path: ""
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails/>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
