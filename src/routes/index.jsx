import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import App from "../App";
import ImageUpload from "../pages/ImageUpload";
import Category from "../pages/Category";
import VerifyEmail from "../pages/VerifyEmail";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/image-upload",
    element: <ImageUpload />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VerifyEmail />,
      },
    ],
  },
]);

export default router;
