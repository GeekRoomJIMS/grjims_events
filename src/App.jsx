import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DayOne from "./pages/DayOne";
import DayTwo from "./pages/DayTwo";
import DayThree from "./pages/DayThree";
import DayFour from "./pages/DayFour";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/day-one",
    element: <DayOne />,
  },
  {
    path: "/day-two",
    element: <DayTwo />,
  },
  {
    path: "/day-three",
    element: <DayThree />,
  },
  {
    path: "/day-two",
    element: <DayFour />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
