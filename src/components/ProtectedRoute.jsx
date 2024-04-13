/* eslint-disable react/prop-types */
import SignUp from "../pages/SignUp";

const ProtectedRoute = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const user = userInfo?.data;
  return user ? children : <SignUp />;
};

export default ProtectedRoute;
