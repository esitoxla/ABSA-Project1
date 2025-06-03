import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([

  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "about",
        Component: AboutPage
      }
    ]
  }
])



function App() {

  return <RouterProvider router={router}/>

}

export default App;
